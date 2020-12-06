import * as ardorjs from "@atz3n/ardorjs";
import { IAccountConversionService } from "../../internal-types";


export default class AccountConversionService implements IAccountConversionService {

    public idToRs(accountId: string): string {
        return ardorjs.rsConvert(accountId).accountRs;
    }


    public passphraseToPublicKey(passphrase: string): string {
        return ardorjs.secretPhraseToPublicKey(passphrase, false);
    }


    public passphraseToPublicKeyBytes(passphrase: string): Array<number> {
        return ardorjs.secretPhraseToPublicKey(passphrase, true);
    }


    public publicKeyToId(publicKey: string): string {
        return ardorjs.publicKeyToAccountId(publicKey, true);
    }


    public publicKeyToRs(publicKey: string): string {
        return ardorjs.publicKeyToAccountId(publicKey, false);
    }


    public passphraseToRs(passphrase: string): string {
        return this.publicKeyToRs(this.passphraseToPublicKey(passphrase));
    }


    public passphraseToId(passphrase: string): string {
        return this.publicKeyToId(this.passphraseToPublicKey(passphrase));
    }

}