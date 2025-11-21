import "./Compare.scss";
import FilterSearch from "../../component/common/FilterSearch";
import AllProductTable from "../../component/Tables/AllProductTable";

const Compare = () => {
  return (
    <div className="container">
      <h1>Compare</h1>

      <div className="all_products_card">
        <div className="pro_crd_head">
          <FilterSearch />
          <div className="row_selection">
            <div className="selection_txt">
              <strong className="txt_primary">Plan: Premium</strong>(Upto 50
              products)
              <strong className="txt_dark">You have selected 1</strong>
            </div>
            <button className="btn btn_outline">Change plan</button>
          </div>
        </div>

        <AllProductTable />
      </div>
    </div>
  );
};

export default Compare;
