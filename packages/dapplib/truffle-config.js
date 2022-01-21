require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remember unveil harvest glory bottom trouble'; 
let testAccounts = [
"0xf3c78855468cf52eb3c1307b114e0914654169e852c9e4c58a558ea42eca143f",
"0x7babe1cb042dc28b5cad69d455807fd68848a9f17c87903e23ea2fe44ae4f788",
"0x56c9607fa31736a089ffdf200d0ec03c9a49d5f5a01a4c8c3a12abfd7af3e25e",
"0x874b02703019c5138ef1ccaf0d97ab0e5c8e7a45331b71dd395b43814882bae1",
"0xbad991f965af00f288e9101df60c5dc7fcc13a1f9827d3b8cbff586950087159",
"0x0a6131b40e100be98e12cf8ff0a46d9182ce0463144ce3b9fee2cd77812121cc",
"0x17a94f25034a441387df7f1e381f10d053d08693c3cda89ead0a6fc1893b1668",
"0x3af07a6b33a30e8418dba5ed5f55c55df900afd403d9571d21c68e7c3ed674fc",
"0x48323238e874a72a8f726337f90a88cc979c8a617bdb973cd332a7953736d476",
"0x54821290f952a5c9a77632a787d2bdd045a998f4381b67ea25c1a145c05d7c9d"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

