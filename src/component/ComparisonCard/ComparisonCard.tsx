import "./ComparisonCard.scss";
import FilterSearch from "../common/FilterSearch";
import { Link } from "react-router-dom";

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
            <img src="/images/product-1.png" alt="" width={51} height={51} />
          </div>
          <div className="head_txt">
            <strong className="crd_title">Wireless Headphones Pro</strong>
            <span className="sub_title">WHP-2024-01</span>
          </div>
        </div>
        <div className="responsive_table">
          <table className="table">
            <thead>
              <tr>
              <th>Store</th>
              <th>Price</th>
              <th>Price difference</th>
              <th>Matching confidence (%)</th>
              <th>Product URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>My Product</td>
                <td>WHP-2024-01</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Link to="" className="view_link active">
                    View Product
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Daraz</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>
                  <Link to="" className="view_link active">
                    View Product
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Priceoye</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>
                  <Link to="" className="view_link active">
                    View Product
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="comp_crd">
        <div className="crd_head">
          <div className="head_img">
            <img src="/images/product-1.png" alt="" width={51} height={51} />
          </div>
          <div className="head_txt">
            <strong className="crd_title">Wireless Headphones Pro</strong>
            <span className="sub_title">WHP-2024-01</span>
          </div>
        </div>
        <div className="responsive_table">
          <table className="table">
            <thead>
              <tr>
                <th>Store</th>
                <th>Price</th>
                <th>Price difference</th>
                <th>Matching confidence (%)</th>
                <th>Product URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>My Product</td>
                <td>WHP-2024-01</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Link to="" className="view_link active">
                    View Product
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Daraz</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>
                  <Link to="" className="view_link">
                    View Product
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Priceoye</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>No data yet</td>
                <td>
                  <Link to="" className="view_link">
                    View Product
                  </Link>
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
