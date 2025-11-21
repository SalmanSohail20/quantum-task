import React from "react";

const FilterSearch = () => {
  return (
    <div className="search_wrap">
      <div className="filter_search">
        <input type="text" className="form_control" placeholder="Search" />
      </div>
      <button className="btn btn_filter">
        <i className="ico ico-filter"></i>
      </button>
    </div>
  );
};

export default FilterSearch;
