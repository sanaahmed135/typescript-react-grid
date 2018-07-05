import ReactGrid from 'react-data-grid';
import React from 'react';
import Column from '../Models/Column'
import Row from '../Models/Row'
import update from 'immutability-helper';

export default class App extends React.Component<{},MyState> {
    private columns : Array<Column> = new Array<Column>();
    
    constructor(props : any, context : any) {
        super(props, context);
        this.createColumns();

        // Setting the Row property of State.  All properties of the state must haveto be set
        this.state = { rows : this.getRows(10) , updatedText : "" };
    }

    render() {
      return  (
          <div>
            <h1> Updated Title :  {this.state.updatedText}</h1>
            <ReactGrid
              enableCellSelect={true}
              columns={this.columns}
              rowGetter={this.getRowbyIndex}
              rowsCount={this.state.rows.length}
              minHeight={500}
              onGridRowsUpdated={this.handleGridRowsUpdated}/>
          </div>);
    }
  
    getRowbyIndex = (index: number) : Row => {
      return this.state.rows[index];
    };

    handleGridRowsUpdated = (e : ReactGrid.GridRowsUpdatedEvent ) : void => {
      let rows :Array<Row> = this.state.rows.slice();
      for (let i : number = e.fromRow; i <= e.toRow; i++) {
        let rowToUpdate = rows[i];
        let updatedRow = update(rowToUpdate, {$merge: e.updated});
        rows[i] = updatedRow;
        
        this.setState ({updatedText: updatedRow.task});
      }
      this.setState({ rows : rows });
    };

    private createColumns() : void {
      this.columns.push(new Column("id","ID"));
      this.columns.push(new Column("task","Title"));
      this.columns.push(new Column("complete","Complete"));
    }

    private getRows(numberOfRows : number) : Array<Row> {
      let rows : Array<Row> = new Array<Row>();
      for (let i : number = 1; i < numberOfRows; i++) {
        let complete : number = Math.min(100, Math.round(Math.random() * 110));
        // create the row object and add it to the array
        let row : Row = new Row(i,"Title " + i,complete);
        rows.push(row);	  
      }
      return rows;
    };
}

interface MyState {
  rows : Row[],
  updatedText : string
}