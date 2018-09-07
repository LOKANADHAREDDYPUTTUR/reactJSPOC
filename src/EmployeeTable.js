import React, { Component } from 'react';
import EmployeeRow from './EmployeeRow';
class EmployeeTable extends React.Component {

    render() {
      var onEmployeeTableUpdate = this.props.onEmployeeTableUpdate;
      var rowDel = this.props.onRowDel;
      var filterText = this.props.filterText;
      var Employee = this.props.Employees.map(function(Employee) {
        if (Employee.name.indexOf(filterText) === -1) {
          return;
        }
        return (<EmployeeRow onEmployeeTableUpdate={onEmployeeTableUpdate}
          Employee={Employee} onDelEvent={rowDel.bind(this)} key={Employee.id}/>)
      });
      return (
        <div>
  
  
        <button type="button" onClick={this.props.onRowAdd} 
        className="btn btn-success pull-right">Add</button>
          <table className="table table-bordered">
            <thead>
                <table className="tabler">
              <tr>
                <th>S.NO</th>
                <th>NAME</th>
                <th>E-Mail</th>
                <th>ACTION</th>
              </tr>
             </table>
            </thead>
  
            <tbody>
              {Employee}
  
            </tbody>
  
          </table>
        </div>
      );
  
    }
  
  }
  
  export default EmployeeTable;