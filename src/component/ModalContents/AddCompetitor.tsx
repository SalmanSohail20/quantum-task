import { Link } from "react-router-dom";
import "./AddCompetitor.scss";
const AddCompetitor = () => {
  return (
    <>
      <div className="add_competitor">
        <div className="modal_head">
          <h2>Add competitors</h2>
          <p>Add competitor sites you care about most.</p>
        </div>
        <div className="add_fields">
          <div className="input_field">
            <input
              type="text"
              className="form_control"
              name="name"
              id="name"
              placeholder="Store name"
            />
          </div>
          <div className="input_field">
            <input
              type="text"
              className="form_control"
              name="url"
              id="url"
              placeholder="Product URL"
            />
          </div>
        </div>

         <div className="filled_fields">
            <ul>
                <li><span className="ico ico-checkmark"></span></li>
                <li>Daraz</li>
                <li><Link to="https://daraz.pk/products/i7ujvm%kj$bjchc...">https://daraz.pk/products/i7ujvm%kj$bjchc...</Link></li>
            </ul>
         </div>
        <div className="btn_wrap">
          <button className="btn btn_secondry">
            <i className="ico ico-plus"></i> Add competitor
          </button>
          <button className="btn btn_primary"> Save</button>
          <button className="btn btn_cancle"> Cancle</button>
        </div>
      </div>
    </>
  );
};

export default AddCompetitor;
