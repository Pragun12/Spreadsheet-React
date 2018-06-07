import React, { Component } from 'react';
import './style.css';

class Cell extends Component {
  
  render() {
   if(this.props.column==='0'){
    return(
    <span>
       {this.props.row}
    </span>
    );
}
else{
    return(
    <span>
      <input type='text' onDoubleClick={} disabled/>
    </span>
    )
    
}
  }
}

export default Cell;
