import React, { Component } from 'react';
import './App.css';

class Header extends React.Component {
    render() {
       return (
           <div className="header">
<form>
  <label className="one">
    Name:
    <input type="text" value="name" />
    </label>
    <label className="two">
    Email:
  <input type="text" value="E-Mail" />
  </label>
 
 <p>
  <input type="button" value="SAVE" />
  <input type="button" value="CANCEL" />
</p>
</form>
</div>
       );
    }
 }
 export default Header;
 