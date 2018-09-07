import React, { Component } from 'react';
import EditableCell from './EditableCell.js';
class EmployeeRow extends React.Component {
    onDelEvent() {
      this.props.onDelEvent(this.props.Employee);
  
    }
    render() {
  
      return (
          <table border="1px">
        <tr className="eachRow">
          <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
            "type": "name",
            value: this.props.Employee.name,
            id: this.props.Employee.id
          }}/>
          <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
            type: "price",
            value: this.props.Employee.price,
            id: this.props.Employee.id
          }}/>
          <EditableCell onEmployeeTableUpdate={this.props.onEmployeeTableUpdate} cellData={{
            type: "qty",
            value: this.props.Employee.qty,
            id: this.props.Employee.id
          }}/>

          <td className="del-cell">
            <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
          </td>
        </tr>
        </table>
      );
  
    }
  
  }
  export default EmployeeRow;