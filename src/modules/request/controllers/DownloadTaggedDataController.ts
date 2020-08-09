import { DownloadTaggedDataParams, DownloadTaggedDataResponse } from "../../../types";
import { IRequestService } from "../../internal-types";


export default class DownloadTaggedDataController {
    private readonly service: IRequestService;


    constructor(service: IRequestService) {
        this.service = service;
    }


    public async run(url: string, params: DownloadTaggedDataParams): Promise<DownloadTaggedDataResponse> {
        params.transactionFullHash = params.fullHash;
        delete params.fullHash;
        const resp = await this.service.run("downloadTaggedData", url, params);
        return resp;
    }
}