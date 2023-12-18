export class SendPingDto {
    url: string = "";
    websiteId: number = 0;
    userId:number = 0;
    constructor(url:string, websiteId:number, userId:number) {
        this.url = url;
        this.websiteId = websiteId;
        this.userId = userId;
    }
}
