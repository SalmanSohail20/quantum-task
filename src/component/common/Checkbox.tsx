import React from "react";
import "./Checkbox.scss";
const Checkbox = () => {
  return (
    <div>
      <input
        className="styled-checkbox"
        id="styled-checkbox-1"
        type="checkbox"
        value="value1"
      />
      <label htmlFor="styled-checkbox-1">Checkbox</label>
    </div>
  );
};

export default Checkbox;
