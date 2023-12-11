export class SendPingDto {
    url: string = "";
    websiteId: number = 0;
    constructor(url:string, websiteId:number) {
        this.url = url;
        this.websiteId = websiteId;
    }
}
