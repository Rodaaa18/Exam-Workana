import React from "react";

export const ProductList = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length} items)</strong>
      </header>
      <table>
        <thead>
          <tr>
            {Object.keys(props.columns).map((column, index) => {
              return (
                <th hidden={!props.columns[column]} key={index}>
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => {
            return (
              <tr key={product.id}>
                <th hidden={!props.columns.id}>{product.id}</th>
                <th hidden={!props.columns.name}>{product.name}</th>
                <th hidden={!props.columns.department}>{product.department}</th>
                <th hidden={!props.columns.price}>{product.price}</th>
                <th hidden={!props.columns.currency}>{product.currency}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
