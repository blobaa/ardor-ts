import * as ardorjs from "@atz3n/ardorjs";
import { ITokenService } from "../../internal-types";


export default class TokenService implements ITokenService {

    public generateForTestnet(message: string, passphrase: string): string {
        return ardorjs.generateToken(message, passphrase, true);
    }

    public generateForMainnet(message: string, passphrase: string): string {
        return ardorjs.generateToken(message, passphrase, false);
    }
}