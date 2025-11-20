import React from "react";
import "./ImportCard.scss";
const ImportCard = () => {
  return (
    <div className="import_pro_crd">
      <div className="crd_icon">
        <i className="ico ico-check"></i>
      </div>
      <div className="crd_txt">
        <strong>All products imported!</strong>
        <strong>We’ve imported 12 products from your store.</strong>
        <p>
          We’ve used your existing product titles, SKUs and barcodes to identify
          your items.
        </p>
      </div>
      <button className="btn btn_primary">Go to products listing</button>
    </div>
  );
};

export default ImportCard;
