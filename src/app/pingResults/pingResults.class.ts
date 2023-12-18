import { Time } from "@angular/common";
import { Website } from "../websites/Website.class";
import { User } from "../users/user.class";

export class PingResults {
    id: number = 0;
    rtt: number = 0.0;
    status: string = "";
    websiteId: number = 0;
    website?: Website;
    address: string = "";
    dateTime: Date = new Date();
    userId: Number = 0;
    user?: User;
}