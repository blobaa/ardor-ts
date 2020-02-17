import { account, Account, request, time } from "../src/index";
import config from "./config";


if (config.test.accountModule.runTests) {
    describe("Account module tests", () => {

        test("convertPassphraseToPublicKey", () => {
            const pubKey = account.convertPassphraseToPublicKey(config.account.alice.secret);
            expect(pubKey).toBe(config.account.alice.pubKey.hex);

            const pubKeyBytes = account.convertPassphraseToPublicKey(config.account.alice.secret, true);
            expect(String(pubKeyBytes)).toBe(String(config.account.alice.pubKey.bytes));
        });


         test("convertPassphraseToPublicKey with own instance", () => {
            const ownAccount = new Account();

            const pubKey = ownAccount.convertPassphraseToPublicKey(config.account.alice.secret);
            expect(pubKey).toBe(config.account.alice.pubKey.hex);

            const pubKeyBytes = ownAccount.convertPassphraseToPublicKey(config.account.alice.secret, true);
            expect(String(pubKeyBytes)).toBe(String(config.account.alice.pubKey.bytes));
        });


        test("convertPublicKeyToAccountId", () => {
            const accountId = account.convertPublicKeyToAccountId(config.account.alice.pubKey.hex);
            expect(accountId).toBe(config.account.alice.id);
        });


        test("convertPublicKeyToAccountRs", () => {
            const accountRs = account.convertPublicKeyToAccountRs(config.account.alice.pubKey.hex);
            expect(accountRs).toBe(config.account.alice.address);
        });


        test("convertPassphraseToAccountId", () => {
            const accountId = account.convertPassphraseToAccountId(config.account.alice.secret);
            expect(accountId).toBe(config.account.alice.id);
        });


        test("convertPassphraseToAccountRs", () => {
            const accountRs = account.convertPassphraseToAccountRs(config.account.alice.secret);
            expect(accountRs).toBe(config.account.alice.address);
        });


        test("checkAccountRs success", () => {
            expect(account.checkAccountRs(config.account.alice.address)).toBe(true);
        });


        test("checkAccountRs prefix error", () => {
            expect(account.checkAccountRs("ARD-XCTG-FVBM-9KNX-3DA6B")).toBe(false);
        });


        test("checkAccountRs alphabet error", () => {
            expect(account.checkAccountRs("ARDOR-XCTG-FVBM-9KNX-3DA6I")).toBe(false);
        });


        test("checkAccountRs length error", () => {
            expect(account.checkAccountRs("ARDOR-XCTG-FVBM-9KNX-3DA6BW")).toBe(false);
        });


        test("checkAccountRs structure error", () => {
            expect(account.checkAccountRs("ARDOR-XCTG-FVBM-9KNX3DA6B")).toBe(false);
        });


        if (config.test.accountModule.generateToken) {
            test("generateToken testnet", async () => {
                const timeWindow = 10 * 1000; // 10 sec
                const currentTime = Date.now();

                const token = account.generateToken("test", config.account.alice.secret, true);
                const response = await request.decodeToken(config.node.url.testnet, { data: "test", token });

                expect(response.valid).toBe(true);
                expect(response.accountRS).toBe(config.account.alice.address);

                /* check if token was created currently (+/- 10 sec) */
                const tokenCreationTime = time.convertArdorToUnixTimestamp(response.timestamp, true);
                expect(tokenCreationTime + timeWindow).toBeGreaterThan(currentTime);
                expect(tokenCreationTime - timeWindow).toBeLessThan(currentTime);
            });


            test("generateToken mainnet", async () => {
                const timeWindow = 10 * 1000; // 10 sec
                const currentTime = Date.now();

                const token = account.generateToken("test", config.account.alice.secret);
                const response = await request.decodeToken(config.node.url.mainnet, { data: "test", token });

                expect(response.valid).toBe(true);
                expect(response.accountRS).toBe(config.account.alice.address);

                /* check if token was created currently (+/- 10 sec) */
                const tokenCreationTime = time.convertArdorToUnixTimestamp(response.timestamp);
                expect(tokenCreationTime + timeWindow).toBeGreaterThan(currentTime);
                expect(tokenCreationTime - timeWindow).toBeLessThan(currentTime);
            });
        }

    });
} else {
    test("dummy", () => {
        expect(true).toBeTruthy();
    });
}