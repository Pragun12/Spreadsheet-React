import React, { Component } from 'react';

import Cell from './Cell';
import './style.css';
class Rows extends Component {
  
  render() {

    const cells=[];
    for(let y=0; y<this.props.columns.length;y++){
        cells.push(
            <td>
            <Cell key={this.props.row} row={this.props.row} column={this.props.columns[y]}/>
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
