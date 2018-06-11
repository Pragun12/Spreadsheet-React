import React, { Component } from 'react';
import Rows from './Rows';
import './style.css';


class Table extends Component {
 
  static defaultProps={
    headings:['0','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  }
  render() {
    
   let thHeadings=this.props.headings.map(heading=>{
    return <th key={heading} >{heading}</th>
   })

   const rows=[];

   for(let x=1;x<=20;x++){
     rows.push(
      
       <Rows key={x} row={x} columns={this.props.headings} dataList={this.props.dataList}/>
      
      
     )

   }

    return (
      <div className='container' >
        <table className='table table-bordered'>
       <thead>
        <tr>
          {thHeadings}
         </tr>
         </thead>
          
        <tbody>
          {rows}
         </tbody>
          
        </table>
      </div>
    );
  }
}

export default Table;
