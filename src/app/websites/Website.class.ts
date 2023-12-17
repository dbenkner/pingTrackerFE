import { User } from "../users/user.class";

export class Website {
    id:number = 0;
    url:string = "";
    averagePing:number | undefined;
    websiteNickname?: string | undefined;
    userId:number = 0;
    user?: User;
}
