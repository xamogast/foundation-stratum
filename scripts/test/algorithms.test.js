/*
 *
 * Algorithms (Updated)
 *
 */

// Import Required Modules
const Algorithms = require('../main/algorithms');

////////////////////////////////////////////////////////////////////////////////

describe('Test all algorithms implemented', () => {

    // Deterministic
    test('Test implemented sha256d algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("dc83687981432eb309f7c96a51f8bd10cec4a4630f47fdca1c2768d34ba9031a", "hex");
        expect(Algorithms.sha256d.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.sha256d.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented scrypt algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("8438235b4ae8f5ad897f9482545fdca3ebeabbc15bffd544cd35d2419976cb8d", "hex");
        expect(Algorithms.scrypt.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.scrypt.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Non-Deterministic
    test('Test implemented c11 algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        expect(Algorithms.c11.hash({}).apply(null, [start]).length).toBe(32);
    });

    // Deterministic
    test('Test implemented x11 algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("61d8655d2aaaded233812baafe6d6472a818246ac641882eb1134af814306071", "hex")
        expect(Algorithms.x11.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.x11.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented x13 algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("bb638d59545d0be7d976862a1d90cc38149f32c83f46f4e6e0e01f70190dd168", "hex")
        expect(Algorithms.x13.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.x13.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented x15 algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("4c96c4733c3012eda472229214c71f63defa052e71ea3425d72d899822bc65df", "hex")
        expect(Algorithms.x15.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.x15.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented x16r algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("f3bd8f00ace441b322c14a179396c0835087536a2d86b7fec062ab88beb0e9c5", "hex")
        expect(Algorithms.x16r.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.x16r.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented x16rv2 algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("f3bd8f00ace441b322c14a179396c0835087536a2d86b7fec062ab88beb0e9c5", "hex")
        expect(Algorithms.x16rv2.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.x16rv2.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented nist5 algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("1bc1a908ccdc3ca21241162a733e792ef5f6ef705ed2c988863d16313fc12680", "hex")
        expect(Algorithms.nist5.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.nist5.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented quark algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("c7b2305e079030ce11a87ca15bf497d378ffc8c2a3739965f544ba53f5c3799e", "hex")
        expect(Algorithms.quark.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.quark.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented keccak algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output1 = Buffer.from("976ce35ca29d5e4ce95f794fe13545580434dce2a7409c98d0888e9eeacd833a", "hex")
        const output2 = Buffer.from("c15f86aa8074976250e7bb2b286850435ae1723b75ee28f3f8eaa3698eafb31e", "hex")
        expect(Algorithms.keccak.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.keccak.hash({}).apply(null, [start])).toStrictEqual(output1);
        expect(Algorithms.keccak.hash({ normalHashing: true}).apply(null, [start, ""])).toStrictEqual(output2);
    });

    // Deterministic
    test('Test implemented blake algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("333ee53bcaa24da99c4e4cad0f1cfb3411193abbd8323e8f4ea7231811cb7d55", "hex")
        expect(Algorithms.blake.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.blake.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Non-Deterministic
    test('Test implemented neoscrypt algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        expect(Algorithms.neoscrypt.hash({}).apply(null, [start, ""]).length).toBe(32);
    });

    // Deterministic
    test('Test implemented skein algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("33b951f9768163ad67e27b7cea6aa82a0153cf9055ddc0b419ccbdc33a32b12c", "hex")
        expect(Algorithms.skein.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.skein.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented groestl algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("c444502e5a9f93f221950a9d392987570aa3a8e8cb837749ec33eafa140cf017", "hex")
        expect(Algorithms.groestl.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.groestl.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented fugue algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("10b761d0a8e010f8dbfc320f59df415d0bfe52ff2c6179c655c77315f6f02dd4", "hex")
        expect(Algorithms.fugue.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.fugue.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented qubit algorithm', () => {
        const start = Buffer.from("000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f");
        const output = Buffer.from("dcd2123c2a5750fab43f78f9a5834c5ef20acda10c0b9de3035b91a51a3408bb", "hex")
        expect(Algorithms.qubit.hash({}).apply(null, [start]).length).toBe(32);
        expect(Algorithms.qubit.hash({}).apply(null, [start])).toStrictEqual(output);
    });

    // Deterministic
    test('Test implemented equihash algorithm [1]', () => {
        const header = Buffer.from('0400000008e9694cc2120ec1b5733cc12687b609058eec4f7046a521ad1d1e3049b400003e7420ed6f40659de0305ef9b7ec037f4380ed9848bc1c015691c90aa16ff3930000000000000000000000000000000000000000000000000000000000000000c9310d5874e0001f000000000000000000000000000000010b000000000000000000000000000040', 'hex');
        const solution = Buffer.from('00b43863a213bfe79f00337f5a729f09710abcc07035ef8ac34372abddecf2f82715f7223f075af96f0604fc124d6151fc8fb516d24a137faec123a89aa9a433f8a25a6bcfc554c28be556f6c878f96539186fab191505f278df48bf1ad2240e5bb39f372a143de1dd1b672312e00d52a3dd83f471b0239a7e8b30d4b9153027df87c8cd0b64de76749539fea376b4f39d08cf3d5e821495e52fdfa6f8085e59fc670656121c9d7c01388c8b4b4585aa7b9ac3f7ae796f9eb1fadba1730a1860eed797feabb18832b5e8f003c0adaf0788d1016e7a8969144018ecc86140aa4553962aa739a4850b509b505e158c5f9e2d5376374652e9e6d81b19fa0351be229af136efbce681463cc53d7880c1eeca3411154474ff8a7b2bac034a2026646776a517bf63921c31fbbd6be7c3ff42aab28230bfe81d33800b892b262f3579b7a41925a59f5cc1d4f523577c19ff9f92023146fa26486595bd89a1ba459eb0b5cec0578c3a071dbec73eca054c723ab30ce8e69de32e779cd2f1030e39878ac6ea3cdca743b43aedefe1a9b4f2da861038e2759defef0b8cad11d4179f2f08881b53ccc203e558c0571e049d998a257b3279016aad0d7999b609f6331a0d0f88e286a70432ca7f50a5bb8fafbbe9230b4ccb1fa57361c163d6b9f84579d61f41585a022d07dc8e55a8de4d8f87641dae777819458a2bf1bb02c438480ff11621ca8442ec2946875cce247c8877051359e9c822670d37bb00fa806e60e8e890ce62540fda2d5b1c790ca1e005030ac6d8e63db577bb98be111ee146828f9c48ee6257d7627b93ea3dd11aac3412e63dfc7ca132a73c4f51e7650f3f8ecf57bfc18716990b492d50e0a3e5fbf6136e771b91f7283ec3326209265b9531d157f8a07a4117fc8fb29ba1363afc6f9f0608251ea595256727a5bbe28f42a42edfbfa9017680e32980d4ad381612612b2bc7ad91e82eca693ea4fc27049a99636b50a576f1e55c72202d582b150ef194c1419f53177ecf315ea6b0e2f1aa8cd8f59b165aa0d89561c537fb6141f5813b7a4968fe16afc703326113f68508d88ff8d0aee1e88a84c0ae56c72f27511290ced48e93e8c95419d14aed1a5b2e9b2c9c1070c593e5eb50bb9a80e14e9f9fe501f56b1b3140159e8213b75d48d14af472a604484cd8e7e7abb6820245ed3ab29f9947463a033c586194be45eadec8392c8614d83a1e9ca0fe5655fa14f7a9c1d1f8f2185a06193ff4a3c3e9a96b02310033ceaa25894e7c56a6147e691597098054e285d39656d3d459ec5d13243c062b6eb44e19a13bdfc0b3c96bd3d1aeb75bb6b080322aea23555993cb529243958bb1a0e5d5027e6c78155437242d1d13c1d6e442a0e3783147a08bbfc0c2529fb705ad27713df40486fd58f001977f25dfd3c202451c07010a3880bca63959ca61f10ed3871f1152166fce2b52135718a8ceb239a0664a31c62defaad70be4b920dce70549c10d9138fbbad7f291c5b73fa21c3889929b143bc1576b72f70667ac11052b686891085290d871db528b5cfdc10a6d563925227609f10d1768a0e02dc7471ad424f94f737d4e7eb0fb167f1434fc4ae2d49e152f06f0845b6db0a44f0d6f5e7410420e6bd1f430b1af956005bf72b51405a04d9a5d9906ceca52c22c855785c3c3ac4c3e9bf532d31bab321e1db66f6a9f7dc9c017f2b7d8dfeb933cf5bbae71311ae318f6d187ebc5c843be342b08a9a0ff7c4b9c4b0f4fa74b13296afe84b6481440d58332e07b3d051ed55219d28e77af6612134da4431b797c63ef55bc53831e2f421db620fee51ba0967e4ed7009ef90af2204259bbfbb54537fd35c2132fa8e7f9c84bf9938d248862c6ca1cca9f48b0b33aa1589185c4eabc1c32', 'hex');
        expect(Algorithms.equihash.hash({}).apply(null, [header, solution, "ZcashPoW", 200, 9])).toBe(true);
    });

    // Deterministic
    test('Test implemented equihash algorithm [2]', () => {
        const header = Buffer.from('0400000008e9694cc2120ec1b5733cc12687b609058eec4f7046a521ad1d1e3049b400003e7420ed6f40659de0305ef9b7ec037f4380ed9848bc1c015691c90aa16ff3930000000000000000000000000000000000000000000000000000000000000000c9310d5874e0001f000000000000000000000000000000010b000000000000000000000000000040', 'hex');
        const solution = Buffer.from('90b43863a213bfe79f00337f5a729f09710abcc07035ef8ac34372abddecf2f82715f7223f075af96f0604fc124d6151fc8fb516d24a137faec123a89aa9a433f8a25a6bcfc554c28be556f6c878f96539186fab191505f278df48bf1ad2240e5bb39f372a143de1dd1b672312e00d52a3dd83f471b0239a7e8b30d4b9153027df87c8cd0b64de76749539fea376b4f39d08cf3d5e821495e52fdfa6f8085e59fc670656121c9d7c01388c8b4b4585aa7b9ac3f7ae796f9eb1fadba1730a1860eed797feabb18832b5e8f003c0adaf0788d1016e7a8969144018ecc86140aa4553962aa739a4850b509b505e158c5f9e2d5376374652e9e6d81b19fa0351be229af136efbce681463cc53d7880c1eeca3411154474ff8a7b2bac034a2026646776a517bf63921c31fbbd6be7c3ff42aab28230bfe81d33800b892b262f3579b7a41925a59f5cc1d4f523577c19ff9f92023146fa26486595bd89a1ba459eb0b5cec0578c3a071dbec73eca054c723ab30ce8e69de32e779cd2f1030e39878ac6ea3cdca743b43aedefe1a9b4f2da861038e2759defef0b8cad11d4179f2f08881b53ccc203e558c0571e049d998a257b3279016aad0d7999b609f6331a0d0f88e286a70432ca7f50a5bb8fafbbe9230b4ccb1fa57361c163d6b9f84579d61f41585a022d07dc8e55a8de4d8f87641dae777819458a2bf1bb02c438480ff11621ca8442ec2946875cce247c8877051359e9c822670d37bb00fa806e60e8e890ce62540fda2d5b1c790ca1e005030ac6d8e63db577bb98be111ee146828f9c48ee6257d7627b93ea3dd11aac3412e63dfc7ca132a73c4f51e7650f3f8ecf57bfc18716990b492d50e0a3e5fbf6136e771b91f7283ec3326209265b9531d157f8a07a4117fc8fb29ba1363afc6f9f0608251ea595256727a5bbe28f42a42edfbfa9017680e32980d4ad381612612b2bc7ad91e82eca693ea4fc27049a99636b50a576f1e55c72202d582b150ef194c1419f53177ecf315ea6b0e2f1aa8cd8f59b165aa0d89561c537fb6141f5813b7a4968fe16afc703326113f68508d88ff8d0aee1e88a84c0ae56c72f27511290ced48e93e8c95419d14aed1a5b2e9b2c9c1070c593e5eb50bb9a80e14e9f9fe501f56b1b3140159e8213b75d48d14af472a604484cd8e7e7abb6820245ed3ab29f9947463a033c586194be45eadec8392c8614d83a1e9ca0fe5655fa14f7a9c1d1f8f2185a06193ff4a3c3e9a96b02310033ceaa25894e7c56a6147e691597098054e285d39656d3d459ec5d13243c062b6eb44e19a13bdfc0b3c96bd3d1aeb75bb6b080322aea23555993cb529243958bb1a0e5d5027e6c78155437242d1d13c1d6e442a0e3783147a08bbfc0c2529fb705ad27713df40486fd58f001977f25dfd3c202451c07010a3880bca63959ca61f10ed3871f1152166fce2b52135718a8ceb239a0664a31c62defaad70be4b920dce70549c10d9138fbbad7f291c5b73fa21c3889929b143bc1576b72f70667ac11052b686891085290d871db528b5cfdc10a6d563925227609f10d1768a0e02dc7471ad424f94f737d4e7eb0fb167f1434fc4ae2d49e152f06f0845b6db0a44f0d6f5e7410420e6bd1f430b1af956005bf72b51405a04d9a5d9906ceca52c22c855785c3c3ac4c3e9bf532d31bab321e1db66f6a9f7dc9c017f2b7d8dfeb933cf5bbae71311ae318f6d187ebc5c843be342b08a9a0ff7c4b9c4b0f4fa74b13296afe84b6481440d58332e07b3d051ed55219d28e77af6612134da4431b797c63ef55bc53831e2f421db620fee51ba0967e4ed7009ef90af2204259bbfbb54537fd35c2132fa8e7f9c84bf9938d248862c6ca1cca9f48b0b33aa1589185c4eabc1c32', 'hex');
        expect(Algorithms.equihash.hash({}).apply(null, [header, solution, "ZcashPoW", 200, 9])).toBe(false);
    });

    // Deterministic
    test('Test implemented equihash algorithm [3]', () => {
        const header = Buffer.from('0400000008e9694cc2120ec1b5733cc12687b609058eec4f7046a521ad1d1e3049b400003e7420ed6f40659de0305ef9b7ec037f4380ed9848bc1c015691c90aa16ff3930000000000000000000000000000000000000000000000000000000000000000c9310d5874e0001f000000000000000000000000000000010b000000000000000000000000000040', 'hex');
        var solution = Buffer.from('0'.repeat(2688), 'hex');
        expect(Algorithms.equihash.hash({}).apply(null, [header, solution, "ZcashPoW", 200, 9])).toBe(false);
    });

    // Deterministic
    test('Test implemented equihash algorithm [4]', () => {
        const parameters = { N: 200, K: 9, personalization: "ZcashPoW" }
        const header = Buffer.from('0400000008e9694cc2120ec1b5733cc12687b609058eec4f7046a521ad1d1e3049b400003e7420ed6f40659de0305ef9b7ec037f4380ed9848bc1c015691c90aa16ff3930000000000000000000000000000000000000000000000000000000000000000c9310d5874e0001f000000000000000000000000000000010b000000000000000000000000000040', 'hex');
        const solution = Buffer.from('00b43863a213bfe79f00337f5a729f09710abcc07035ef8ac34372abddecf2f82715f7223f075af96f0604fc124d6151fc8fb516d24a137faec123a89aa9a433f8a25a6bcfc554c28be556f6c878f96539186fab191505f278df48bf1ad2240e5bb39f372a143de1dd1b672312e00d52a3dd83f471b0239a7e8b30d4b9153027df87c8cd0b64de76749539fea376b4f39d08cf3d5e821495e52fdfa6f8085e59fc670656121c9d7c01388c8b4b4585aa7b9ac3f7ae796f9eb1fadba1730a1860eed797feabb18832b5e8f003c0adaf0788d1016e7a8969144018ecc86140aa4553962aa739a4850b509b505e158c5f9e2d5376374652e9e6d81b19fa0351be229af136efbce681463cc53d7880c1eeca3411154474ff8a7b2bac034a2026646776a517bf63921c31fbbd6be7c3ff42aab28230bfe81d33800b892b262f3579b7a41925a59f5cc1d4f523577c19ff9f92023146fa26486595bd89a1ba459eb0b5cec0578c3a071dbec73eca054c723ab30ce8e69de32e779cd2f1030e39878ac6ea3cdca743b43aedefe1a9b4f2da861038e2759defef0b8cad11d4179f2f08881b53ccc203e558c0571e049d998a257b3279016aad0d7999b609f6331a0d0f88e286a70432ca7f50a5bb8fafbbe9230b4ccb1fa57361c163d6b9f84579d61f41585a022d07dc8e55a8de4d8f87641dae777819458a2bf1bb02c438480ff11621ca8442ec2946875cce247c8877051359e9c822670d37bb00fa806e60e8e890ce62540fda2d5b1c790ca1e005030ac6d8e63db577bb98be111ee146828f9c48ee6257d7627b93ea3dd11aac3412e63dfc7ca132a73c4f51e7650f3f8ecf57bfc18716990b492d50e0a3e5fbf6136e771b91f7283ec3326209265b9531d157f8a07a4117fc8fb29ba1363afc6f9f0608251ea595256727a5bbe28f42a42edfbfa9017680e32980d4ad381612612b2bc7ad91e82eca693ea4fc27049a99636b50a576f1e55c72202d582b150ef194c1419f53177ecf315ea6b0e2f1aa8cd8f59b165aa0d89561c537fb6141f5813b7a4968fe16afc703326113f68508d88ff8d0aee1e88a84c0ae56c72f27511290ced48e93e8c95419d14aed1a5b2e9b2c9c1070c593e5eb50bb9a80e14e9f9fe501f56b1b3140159e8213b75d48d14af472a604484cd8e7e7abb6820245ed3ab29f9947463a033c586194be45eadec8392c8614d83a1e9ca0fe5655fa14f7a9c1d1f8f2185a06193ff4a3c3e9a96b02310033ceaa25894e7c56a6147e691597098054e285d39656d3d459ec5d13243c062b6eb44e19a13bdfc0b3c96bd3d1aeb75bb6b080322aea23555993cb529243958bb1a0e5d5027e6c78155437242d1d13c1d6e442a0e3783147a08bbfc0c2529fb705ad27713df40486fd58f001977f25dfd3c202451c07010a3880bca63959ca61f10ed3871f1152166fce2b52135718a8ceb239a0664a31c62defaad70be4b920dce70549c10d9138fbbad7f291c5b73fa21c3889929b143bc1576b72f70667ac11052b686891085290d871db528b5cfdc10a6d563925227609f10d1768a0e02dc7471ad424f94f737d4e7eb0fb167f1434fc4ae2d49e152f06f0845b6db0a44f0d6f5e7410420e6bd1f430b1af956005bf72b51405a04d9a5d9906ceca52c22c855785c3c3ac4c3e9bf532d31bab321e1db66f6a9f7dc9c017f2b7d8dfeb933cf5bbae71311ae318f6d187ebc5c843be342b08a9a0ff7c4b9c4b0f4fa74b13296afe84b6481440d58332e07b3d051ed55219d28e77af6612134da4431b797c63ef55bc53831e2f421db620fee51ba0967e4ed7009ef90af2204259bbfbb54537fd35c2132fa8e7f9c84bf9938d248862c6ca1cca9f48b0b33aa1589185c4eabc1c32', 'hex');
        expect(Algorithms.equihash.hash({ parameters: parameters }).apply(null, [header, solution, "ZcashPoW", 200, 9])).toBe(true);
    });
});
