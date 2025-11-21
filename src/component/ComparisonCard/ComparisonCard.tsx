import React from "react";
import "./ComparisonCard.scss";
import FilterSearch from "../common/FilterSearch";
const ComparisonCard = () => {
  return (
    <>
      <strong className="sub_heading">Recent comparisons</strong>
      <div className="comp_crd_head">
        <FilterSearch />
        <button className="btn btn_outline">View All</button>
      </div>

      <div className="comp_crd">
        <div className="crd_head">
          <div className="head_img">
            {/* <img src="/images/product-1.png" alt="" width={51} height={51} /> */}
          </div>
          <div className="head_txt">
            <strong className="crd_title">Wireless Headphones Pro</strong>
            <span className="sub_title">WHP-2024-01</span>
          </div>
        </div>
        <div className="responsive_table">
          <table className="table">
            <thead>
              <th>Store</th>
              <th>Price</th>
              <th>Price difference</th>
              <th>Matching confidence (%)</th>
              <th>Product URL</th>
            </thead>
            <tbody>
              <tr>
                <td>My Product</td>
                <td>WHP-2024-01</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <a href="" className="view_link active">
                    View Product
                  </a>
                </td>
              </tr>
              <tr>
                <td>Daraz</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>
                  <a href="" className="view_link active">
                    View Product
                  </a>
                </td>
              </tr>
              <tr>
                <td>Priceoye</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>
                  <a href="" className="view_link active">
                    View Product
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="comp_crd">
        <div className="crd_head">
          <div className="head_img">
            {/* <img src="/images/product-1.png" alt="" width={51} height={51} /> */}
          </div>
          <div className="head_txt">
            <strong className="crd_title">Wireless Headphones Pro</strong>
            <span className="sub_title">WHP-2024-01</span>
          </div>
        </div>
        <div className="responsive_table">
          <table className="table">
            <thead>
              <th>Store</th>
              <th>Price</th>
              <th>Price difference</th>
              <th>Matching confidence (%)</th>
              <th>Product URL</th>
            </thead>
            <tbody>
              <tr>
                <td>My Product</td>
                <td>WHP-2024-01</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <a href="" className="view_link active">
                    View Product
                  </a>
                </td>
              </tr>
              <tr>
                <td>Daraz</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>
                  <a href="" className="view_link">
                    View Product
                  </a>
                </td>
              </tr>
              <tr>
                <td>Priceoye</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>
                  <a href="" className="view_link">
                    View Product
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ComparisonCard;
