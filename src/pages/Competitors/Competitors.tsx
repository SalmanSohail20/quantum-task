import "./Competitors.scss";

const Competitors = () => {
  return (
    <div className="competitors_page">
      <div className="container">
        <div className="compe_head">
          <h1>Competitors management</h1>
          <p>Add, edit, or remove competitor stores for price comparisons.</p>
        </div>
        <div className="compe_crud_box">
          <div className="product_row">
            <div className="lft">
              <strong>Daraz</strong>
              <span>https://daraz.pk/products/i7ujvm%kj$bjchc...</span>
              <span>1 product tracked</span>
            </div>
            <div className="rgt">
              <i className="ico ico-edit"></i>
              <i className="ico ico-trash"></i>
            </div>
          </div>
          <div className="product_row">
            <div className="lft">
              <span className="title">Priceoye</span>
              <span className="pro_link">https://priceoye.pk/products/i7ujvm%kj$bjchc...</span>
              <span>1 product tracked</span>
            </div>
            <div className="rgt">
              <i className="ico ico-edit"></i>
              <i className="ico ico-trash"></i>
            </div>
          </div>
          <button className="btn btn_secondary"><i className="ico ico-plus"></i> competitor</button>
        </div>
      </div>
    </div>
  );
};

export default Competitors;
