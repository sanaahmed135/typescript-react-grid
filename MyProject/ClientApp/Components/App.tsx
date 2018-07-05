import ReactDataGrid from 'react-data-grid';
import React from 'react';
import Column from '../Models/Column'
import Row from '../Models/Row'

export default class App extends React.Component<{}> {
    private columns : Array<Column> = new Array<Column>();
    private rows : Array<Row> = new Array<Row>();
    constructor(props : any, context : any) {
        super(props, context);

        this.createColumns();
        this.createRows();
  }

  createColumns() : void{
    this.columns.push(new Column("id","ID",true,120));
    this.columns.push(new Column("title","Title"));
    this.columns.push(new Column("count","Count"));
  }
  createRows() :void{

    for (let i : number = 1; i < 1000; i++) {
      // create an object of Row
	  let row = new Row(i, "Title " + i, i * 1000);
	  // adding that object to the array of Row
	  this.rows.push(row);	  
    }
  };

  rowGetter = (i: number) => {
    return this.rows[i];
  };
  render() {
    return  (
        <div>
      <ReactDataGrid
        columns={this.columns}
        rowGetter={this.rowGetter}
        rowsCount={this.rows.length}
        minHeight={500} />
        </div>
        );
        
  }
}