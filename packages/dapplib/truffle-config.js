require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name rice mad miss hunt inhale flock venture'; 
let testAccounts = [
"0x465e24cfccd5ff787da22f884192ae2289584ec6fb85f7b93352a7d490feb89b",
"0xc5463b7e5de04a9a0199c799fc30c6398aba8b350d67e340054fa8d4daa56580",
"0x137f2deacf93b86fbca565dcc5e8462a4198baa3f5db887d4e3edb2fc428f093",
"0xea33b9dbb21e81a13b140e2d3e25fa0e3ebdab52d1d07dd4c2fa6cfa858cfbbc",
"0x3613cc42f437a2745c22da9f4842fbf4c566d18962f1ce5e6b2f16b25b843feb",
"0x2e60970da20efa48396a65f5da01f57d7368661b74d717896e741b52fd1f3107",
"0xc0de72498f428f6b6f7defd555d291c06efeb48895f237717640e8ce4e1351c0",
"0xf6a0f39c52d5a8df6d717048391c71a30d4ceb65c05d1e551206e277388cbb19",
"0x26cda021321990984f6a5e6183069e4d3525b0c0807345ab11dff40653ad7058",
"0x29060857dbe3af1a85d331d8c579a4a60c97bbf2dc7929bbddfacaf6ef7c6201"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

