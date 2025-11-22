import "./ImportCard.scss";
interface ImportCardProps {
  onSwitchToListing: () => void;
}
const ImportCard = ({ onSwitchToListing }: ImportCardProps) => {
  return (
    <div className="import_crd_wrap">
    <div className="import_pro_crd">
      <div className="crd_icon">
        <i className="ico ico-check"></i>
      </div>
      <strong className="crd_title">All products imported!</strong>
      <strong className="crd_subtitle">
        We’ve imported 12 products from your store.
      </strong>
      <p>
        We’ve used your existing product titles, SKUs and barcodes to identify
        your items.
      </p>
      <button className="btn btn_primary" onClick={onSwitchToListing}>
        Go to products listing
      </button>
    </div>

    </div>
  );
};

export default ImportCard;
