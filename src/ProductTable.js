import React, { Component } from 'react';
import ProductRow from './ProductRow.js';
class ProductTable extends React.Component {

    render() {
      var onProductTableUpdate = this.props.onProductTableUpdate;
      var rowDel = this.props.onRowDel;
      var filterText = this.props.filterText;
      var product = this.props.products.map(function(product) {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        return (<ProductRow onProductTableUpdate={onProductTableUpdate}
             product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
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
              {product}
  
            </tbody>
  
          </table>
        </div>
      );
  
    }
  
  }
  
  export default ProductTable;