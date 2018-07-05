export default class Column{
    key: string;
    name : string;
    editable? :boolean;
    width? : number = 50;
    
	constructor(_key: string , _name : string,_editable? : boolean,_width? :number) {
        this.key = _key;
        this.name = _name;
        this.editable = _editable;
        this.width = _width;
    }
}