export default class Row{
    id: number;
    title : string;
    count : number;
    
	constructor(_id: number , _title : string,_count : number) {
        this.id = _id;
        this.title = _title;
        this.count=_count;
    }
}