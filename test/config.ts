const config = {
    test: {
        requestModule: {
            getInformationRequests: true,
            postTransactionRequests: {
                runTests: false,
                sendMoney: true,
                setAccountProperty: true,
                deleteAccountProperty: true,
                sendMessage: true,
                uploadTaggedData: true
            }
        },
        passphraseModule: true,
        accountModule: {
            runTests: true,
            generateToken: true
        },
        timeModule: true,
        currencyModule: true
    },
    node: {
        url: {
            testnet: "https://testardor.jelurida.com",
            mainnet: "https://ardor.jelurida.com"
        }
    },
    account: {
        alice: {
            address: "ARDOR-XCTG-FVBM-9KNX-3DA6B",
            secret: "wild dig father volume bird sister work king tonight punch shiver tide",
            pubKey: {
                hex: "0c1b9656a92e2589ed09d0f22c5807db6e58301b72a48891a4b1763918b3014a",
                bytes: [ 12, 27, 150, 86, 169, 46, 37, 137, 237, 9, 208, 242, 44, 88, 7, 219,
                         110, 88, 48, 27, 114, 164, 136, 145, 164, 177, 118, 57, 24, 179, 1, 74 ]
            },
            id: "1481978323000011566",
            token: {
                testnet: {
                    data: "test",
                    token: "l5b9c6oc17moi99e0tc2psmg3co5grmrki8oh93imcc3itlha5mjmig1no8ku9o3jcqeni89r37h9c1jfofkcma1mkrvbi5ckv54m0hb5i807umv7dcqllss88p4sj9h10epl4ts9kci04nriv07bkqc3a73jton",
                    timestamp: 55668027
                },
                mainnet: {
                    data: "test",
                    token: "l5b9c6oc17moi99e0tc2psmg3co5grmrki8oh93imcc3itlh99adaig1lcq0lqg392ho405ku670jvs7dj4a2dq92l0dpl7temugbufg3cb00be0am9m8s6taqdqenmmr0esvtfegg0chc1g3hc3oiq1bd6q4mhs",
                    timestamp: 55203029
                }
            }
        },
        bob: {
            address: "ARDOR-ZXVB-LCDL-DE2U-22LK6",
            secret: "dry murder bullet ahead softly honest clay soothe accident problem random unless",
            pubKey: {
                hex: "db2e07c25c2d1ad4b00177f4f579c8caf669bf6c1b946291329880a2cff7c46d",
                bytes: [ 219, 46, 7, 194, 92, 45, 26, 212, 176, 1, 119, 244, 245, 121, 200, 202,
                         246, 105, 191, 108, 27, 148, 98, 145, 50, 152, 128, 162, 207, 247, 196, 109 ]
            },
            id: "163889434791507817"
        }
    },
    timestamp: {
        ardor: {
            testnet: 55668027,
            mainnet: 55200467
        },
        unix: {
            testnet: 1569964827000,
            mainnet: 1569965267000
        }
    },
    transaction: {
        message: {
            fullHash: "f0ff38e32214bcedd6c08e7a688defa1d632ae3139764423f8d26b91c949e61d",
            message: "module-test-1582036400563"
        },
        taggedData: {
            fullHash: "41ea1258ea9c552f7aa415fe68739cb54e16aa058090090cf60944e0791269d0",
            content: "module-test-1596986945",
            name: "module-test"
        }
    }
};

export default config;