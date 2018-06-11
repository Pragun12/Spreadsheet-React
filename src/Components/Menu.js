import React, { Component } from 'react';

import './style.css';


class Menu extends Component {

  onSave(){
   this.props.onSave();
 }
  
  render() {
   return(<div>

     <button type="button" className="btn btn-primary" onClick={this.onSave.bind(this)}>Save</button>
   </div>)
  }
}

export default Menu;
