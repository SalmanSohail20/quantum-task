import Heading from "../../component/common/Heading";
import AnalyticCard from "../../component/AnalyticCard/AnalyticCard";
import ComparisonCard from "../../component/ComparisonCard/ComparisonCard";
import FilterSearch from "../../component/common/FilterSearch";
import { Link } from "react-router-dom";

const Analytics = () => {
  return (
    <div className="container">
      <Heading />
      <AnalyticCard />
      <strong className="sub_heading">Recent comparisons</strong>
      <div className="comp_crd_head">
        <FilterSearch />
        <Link to="/compare?tab=comparison-analytics" className="btn btn_outline">View All</Link>
      </div>
      <ComparisonCard />
    </div>
  );
};

export default Analytics;
