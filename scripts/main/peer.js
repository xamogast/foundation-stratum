/*
 *
 * Peer (Updated)
 *
 */

const net = require('net');
const crypto = require('crypto');
const events = require('events');
const utils = require('./utils.js');

/**
 * Reads a set amount of bytes from a flowing stream, argument descriptions:
 * - stream to read from, must have data emitter
 * - amount of bytes to read
 * - preRead argument can be used to set start with an existing data buffer
 * - callback returns 1) data buffer and 2) lopped/over-read data
**/

// Read Bytes Functionality
function readFlowingBytes(stream, amount, preRead, callback) {
    let buff = preRead ? preRead : Buffer.from([]);
    const readData = function (data) {
        buff = Buffer.concat([buff, data]);
        if (buff.length >= amount) {
            const returnData = buff.slice(0, amount);
            const lopped = buff.length > amount ? buff.slice(amount) : null;
            callback(returnData, lopped);
        }
        else
            stream.once('data', readData);
    };
    readData(Buffer.from([]));
}

// Main Peer Function
const Peer = function(options) {

    const _this = this;
    let client;
    let verack = options.verack;
    let validConnectionConfig = options.validConnectionConfig;
    const magic = Buffer.from(options.testnet ? options.coin.testnet.peerMagic : options.coin.mainnet.peerMagic, 'hex');
    const magicInt = magic.readUInt32LE(0);

    const networkServices = Buffer.from('0100000000000000', 'hex'); // NODE_NETWORK services (value 1 packed as uint64)
    const emptyNetAddress = Buffer.from('010000000000000000000000000000000000ffff000000000000', 'hex');
    const userAgent = utils.varStringBuffer('/node-stratum/');
    const blockStartHeight = Buffer.from('00000000', 'hex'); // block start_height, can be empty
    const relayTransactions = options.p2p.disableTransactions === true ? Buffer.from([false]) : Buffer.from([]);

    const invCodes = {
        error: 0,
        tx: 1,
        block: 2
    };

    const commands = {
        version: utils.commandStringBuffer('version'),
        inv: utils.commandStringBuffer('inv'),
        verack: utils.commandStringBuffer('verack'),
        addr: utils.commandStringBuffer('addr'),
        getblocks: utils.commandStringBuffer('getblocks')
    };

    // Establish Peer Connection
    this.setupPeer = function() {
        client = net.connect({
            host: options.p2p.host,
            port: options.p2p.port
        }, function () {
            _this.sendVersion();
        });
        client.on('close', function () {
            if (verack) {
                _this.emit('disconnected');
                verack = false;
                _this.setupPeer();
            }
            else if (validConnectionConfig) {
                _this.emit('connectionRejected');
            }
        });
        client.on('error', function (e) {
            if (e.code === 'ECONNREFUSED') {
                validConnectionConfig = false;
                _this.emit('connectionFailed');
            }
            else {
                _this.emit('socketError', e);
            }
        });
        _this.setupMessageParser(client);
        return client;
    };

    // Establish Peer Message Parser
    this.setupMessageParser = function(client) {
        const beginReadingMessage = function (preRead) {
            readFlowingBytes(client, 24, preRead, function (header, lopped) {
                const msgMagic = header.readUInt32LE(0);
                if (msgMagic !== magicInt) {
                    _this.emit('error', 'bad magic number from peer');
                    while (header.readUInt32LE(0) !== magicInt && header.length >= 4) {
                        header = header.slice(1);
                    }
                    if (header.readUInt32LE(0) === magicInt) {
                        beginReadingMessage(header);
                    }
                    else {
                        beginReadingMessage(Buffer.from([]));
                    }
                    return;
                }
                const msgCommand = header.slice(4, 16).toString();
                const msgLength = header.readUInt32LE(16);
                const msgChecksum = header.readUInt32LE(20);
                readFlowingBytes(client, msgLength, lopped, function (payload, lopped) {
                    if (utils.sha256d(payload).readUInt32LE(0) !== msgChecksum) {
                        _this.emit('error', 'bad payload - failed checksum');
                        beginReadingMessage(null);
                        return;
                    }
                    _this.handleMessage(msgCommand, payload);
                    beginReadingMessage(lopped);
                });
            });
        };
        beginReadingMessage(null);
    };

    // Handle Peer Inventory
    this.handleInventory = function(payload) {
        let count = payload.readUInt8(0);
        payload = payload.slice(1);
        if (count >= 0xfd) {
            count = payload.readUInt16LE(0);
            payload = payload.slice(2);
        }
        while (count--) {
            switch (payload.readUInt32LE(0)) {
            case invCodes.error:
                break;
            case invCodes.tx: {
                // eslint-disable-next-line no-unused-vars
                const tx = payload.slice(4, 36).toString('hex');
                break;
            }
            case invCodes.block: {
                const block = payload.slice(4, 36).toString('hex');
                _this.emit('blockFound', block);
                break;
            }}
            payload = payload.slice(36);
        }
    };

    // Handle Peer Messages
    this.handleMessage = function(command, payload) {
        _this.emit('peerMessage', {command: command, payload: payload});
        switch (command) {
        case commands.inv.toString():
            _this.handleInventory(payload);
            break;
        case commands.verack.toString():
            if(!verack) {
                verack = true;
                _this.emit('connected');
            }
            break;
        case commands.version.toString():
            _this.sendMessage(commands.verack, Buffer.alloc(0));
            break;
        default:
            break;
        }

    };

    // Broadcast/Send Peer Messages
    this.sendMessage = function(command, payload) {
        const message = Buffer.concat([
            magic,
            command,
            utils.packUInt32LE(payload.length),
            utils.sha256d(payload).slice(0, 4),
            payload
        ]);
        client.write(message);
        _this.emit('sentMessage', message);
    };

    // Broadcast/Send Peer Version
    this.sendVersion = function() {
        const payload = Buffer.concat([
            utils.packUInt32LE(options.protocolVersion),
            networkServices,
            utils.packUInt64LE(Date.now() / 1000 | 0),
            emptyNetAddress,
            emptyNetAddress,
            crypto.pseudoRandomBytes(8),
            userAgent,
            blockStartHeight,
            relayTransactions
        ]);
        _this.sendMessage(commands.version, payload);
    };

    _this.setupPeer();
};

module.exports = Peer;
Peer.prototype.__proto__ = events.EventEmitter.prototype;
