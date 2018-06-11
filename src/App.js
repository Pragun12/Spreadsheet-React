import React, { Component } from 'react';

import './App.css';
import Table from './Components/Table';
import Menu from './Components/Menu';

class App extends Component {

  constructor(){
    super();
    let savedData=localStorage.getItem('storage');
    this.state={
      dataList:JSON.parse(savedData)
    }
   
  }


  onSave(){
   
   localStorage.setItem('storage',JSON.stringify(this.state.dataList));
  }
  render() {
    return (
      <div className="App">
      <Menu onSave={this.onSave.bind(this)}/>
        <Table dataList={this.state.dataList}/>
      </div>
    );
  }
}

export default App;
