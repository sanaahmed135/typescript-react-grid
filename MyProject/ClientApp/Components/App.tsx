import ReactDataGrid from 'react-data-grid';
import React from 'react';
import Column from '../Models/Column'
import Row from '../Models/Row'
import update from 'immutability-helper';

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
    this.columns.push(new Column("task","Title"));
    this.columns.push(new Column("complete","Complete"));
  }


  createRows() :void{

    for (let i : number = 1; i < 1000; i++) {
      // create an object of Row
      let complete : number = Math.min(100, Math.round(Math.random() * 110));
	  let row : Row = new Row(i,"Title " + i,complete);
	  // adding that object to the array of Row
	  this.rows.push(row);	  
    }
  };

  getRandomDate = (start :Date, end : Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
  };
  rowGetter = (i: number) => {
    return this.rows[i];
  };

  handleGridRowsUpdated = (fromRow: number, toRow:number, updated : object) => {
    let rows :Array<Row> = this.rows.slice();

    for (let i : number = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i];
      let updatedRow = update(rowToUpdate, {$merge: updated});
      rows[i] = updatedRow;
    }

    this.setState({ rows });
  };


  render() {
    return  (
        <div>
      <ReactDataGrid
        enableCellSelect={true}
        columns={this.columns}
        rowGetter={this.rowGetter}
        rowsCount={this.rows.length}
        minHeight={500}
        minColumnWidth={120} 
        onGridRowsUpdated={this.handleGridRowsUpdated} 
        />
        </div>
        );
        
  }
}