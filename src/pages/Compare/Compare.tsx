import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

import "./Compare.scss";
import FilterSearch from "../../component/common/FilterSearch";
import AllProductTable from "../../component/Tables/AllProductTable";
import ComparisonCard from "../../component/ComparisonCard/ComparisonCard";

const Compare: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("all-products");

  const tabs = useMemo(
    () => [
      { id: "all-products", label: "All Products" },
      { id: "comparison-analytics", label: "Comparison analytics" },
    ],
    []
  );

  useEffect(() => {
    const tab = searchParams.get("tab") || "all-products";
    setActiveTab(tab);
  }, [searchParams]);

  const handleTabClick = (tabId: string) => {
    setSearchParams({ tab: tabId });
  };

  return (
    <div className="container">
      <ul className="tab_list">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={activeTab === tab.id ? "active" : ""}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </li>
        ))}
      </ul>

      {activeTab === "all-products" && (
        <div className="tab-content">
          <div className="all_products_card">
            <div className="pro_crd_head">
              <FilterSearch />

              <div className="row_selection">
                <div className="selection_txt">
                  <strong className="txt_primary">Plan: Premium</strong>(Upto 50 products)
                  <strong className="txt_dark">You have selected 1</strong>
                </div>
                <button className="btn btn_outline">Change plan</button>
              </div>
            </div>

            <AllProductTable />
          </div>
        </div>
      )}

      {activeTab === "comparison-analytics" && (
        <div className="tab-content">
         <ComparisonCard />
        </div>
      )}
    </div>
  );
};

export default Compare;
