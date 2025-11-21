import React from "react";
import "./AllProductTable.scss";
import Checkbox from "../common/Checkbox";
const AllProductTable = () => {
  return (
    <div className="all_product_table">
      <table className="table">
        <thead>
          <th>
            <Checkbox />
          </th>
          <th>Product</th>
          <th>Price</th>
          <th>Competitors</th>
          <th>
            Compare <i className="ico ico-tool-icon"></i>
          </th>
        </thead>
        <tbody>
          <tr>
            <td>My Product</td>
            <td>WHP-2024-01</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllProductTable;
