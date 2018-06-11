import React, { Component } from 'react';
import './style.css';

class Cell extends Component {

  constructor() {
    super();
    this.state={
      highlight:false,
      data:{ }
      
    }
    
    
  }

  keyUp(e){
    
    let inpt=e.target.value
    var checkForWhiteSpace=inpt.replace(/ /g,'');
    let datalist=this.props.dataList;
    let cellname=this.props.row+this.props.column;
    if(checkForWhiteSpace.length!==0){
      this.setState({
        data:{
         name:this.props.row+this.props.column,
         value:e.target.value
        }
      },function(){
        
        if(datalist.find(x=>x.name===cellname)){
         let index=datalist.findIndex(x=>x.name===cellname);
        datalist[index]['value']=inpt;
       
        
        }
        else{
        this.props.dataList.push(this.state.data);
      
        }
     //   console.log(datalist);
        
      } 
      
    )
    }
    else{

      let index=datalist.findIndex(x=>x.name===cellname);
      this.props.dataList.splice(index,1);
    }

  }
doubleClicked(e){

  let x=this.props.row;
  let z=this.props.column;
  let cells=document.getElementsByClassName('indiv_cell');
  for(let i=0;i<cells.length;i++){

    if(cells[i].classList.contains("active")){
      cells[i].className =  cells[i].className.replace("active", "");
    }
  }
  
  document.getElementById(`${x+z}`).classList.add('active');
 
}
  
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
    <span onDoubleClick={this.doubleClicked.bind(this)}>
      <input type='text' ref='cell' onKeyUp={this.keyUp.bind(this)}  defaultValue={this.props.storedValue}/>
    </span>
    )
    
}
  }
}

export default Cell;
