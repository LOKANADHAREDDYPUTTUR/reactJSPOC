
import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import EmployeeTable from './EmployeeTable.js';


class Employee extends React.Component {

  constructor(props) {
    super(props);
	//just to know about new version
    //  this.state.Employees = [];
    this.state = {};
    this.state.filterText = "";
    this.state.Employees = [
      {
        id: 1,
      
        price: 'loka',
        qty: 12,
        name: '1'
      }, {
        id: 2,
       
        price: 'reddy',
        qty: 15,
        name: '2'
      }, 
    ];

  }
  handleUserInput(filterText) {
    this.setState({filterText: filterText});
  };
  handleRowDel(Employee) {
    var index = this.state.Employees.indexOf(Employee);
    this.state.Employees.splice(index, 1);
    this.setState(this.state.Employees);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var Employee = {
      id: id,
      name: "",
      price: "",
      qty: 0
    }
    this.state.Employees.push(Employee);
    this.setState(this.state.Employees);

  }

  handleEmployeeTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
var Employees = this.state.Employees.slice();
  var newEmployees = Employees.map(function(Employee) {

    for (var key in Employee) {
      if (key == item.name && Employee.id == item.id) {
        Employee[key] = item.value;

      }
    }
    return Employee;
  });
    this.setState({Employees:newEmployees});
  //  console.log(this.state.Employees);
  };
  render() {

    return (
      <div>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)}/>
        <EmployeeTable onEmployeeTableUpdate={this.handleEmployeeTable.bind(this)}
         onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)}
         Employees={this.state.Employees} filterText={this.state.filterText}/>
      </div>
    );

  }

}

  export default Employee;

  
 
  
  
  
  