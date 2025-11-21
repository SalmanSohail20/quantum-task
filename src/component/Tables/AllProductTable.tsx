import "./AllProductTable.scss";
import Checkbox from "../common/Checkbox";
import { Link } from "react-router-dom";
import Switch from "../common/Switch";
const AllProductTable = () => {
  return (
    <div className="all_product_table">
      <table className="table">
        <thead>
          <tr>
          <th>
            <Checkbox id="cb1"  />
          </th>
          <th>Product</th>
          <th>Price</th>
          <th>Competitors</th>
          <th>
            Compare <i className="ico ico-tool-icon"></i>
          </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> <Checkbox id="cb2" /></td>
            <td>
              <div className="product_dec">
                <div className="product_img">
                  <img src="/images/product-1.png" width={51} height={51} alt="" />
                </div>
                <strong className="product_txt">Wireless Headphones Pro</strong>
              </div>
            </td>
            <td>$129.99</td>
            <td><Link to="/competitors" className="competitor_btn"><i className="ico ico-plus"></i>Add Competitor</Link></td>
            <td><Switch  chkId="switch-1" /></td>
          </tr>
          <tr>
            <td> <Checkbox id="cb3" /></td>
            <td>
              <div className="product_dec">
                <div className="product_img">
                  <img src="/images/product-1.png" width={51} height={51} alt="" />
                </div>
                <strong className="product_txt">Wireless Headphones Pro</strong>
              </div>
            </td>
            <td>$129.99</td>
            <td><Link to="/competitors" className="competitor_btn"><i className="ico ico-plus"></i>Add Competitor</Link></td>
            <td><Switch  chkId="switch-2" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllProductTable;
