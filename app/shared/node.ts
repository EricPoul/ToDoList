export class Node{
    public id: number;
    public username: string;
    public userset: string;
    public title: string;
    public detail: string;
    public usetime: number;
    public date: Date;
    public status: string;
    

    constructor(id: number, username: string, userset: string, title: string, detail: string, usetime: number, date: Date, status: string) { 
            this.id = id;
            this.username = username;
            this.userset = userset;
            this.title = title;
            this.detail = detail;
            this.usetime = usetime;
            this.date = date;
            this.status = status;
        }
}