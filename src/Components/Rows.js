import React, { Component } from 'react';

import Cell from './Cell';
import './style.css';
class Rows extends Component {
  
  render() {
    
    const cells=[];
    
    for(let y=0; y<this.props.columns.length;y++){
     
      let x=this.props.row;
       let z=this.props.columns[y];
       let cellname=x+z;
       let storedValue='';
       if(this.props.dataList.find(x=>x.name===cellname)){
       storedValue=this.props.dataList.find(x=>x.name===cellname).value;
       }
       cells.push(
            <td key={`${x+z}`} id={`${x+z}`} className='indiv_cell'>
            <Cell  row={this.props.row} column={this.props.columns[y]} dataList={this.props.dataList} storedValue={storedValue}/>
           </td>
      );



    }
    return(
    <tr>
    {cells}
    </tr>
    );
  }
}

export default Rows;
