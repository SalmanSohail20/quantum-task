import { useState } from "react";
import { Link } from "react-router-dom";
import "./AddCompetitor.scss";
import { useCompetitors } from "../../context/CompetitorsContext";

interface AddCompetitorProps {
  onClose: () => void;
  productId: number;
}

const AddCompetitor: React.FC<AddCompetitorProps> = ({ onClose, productId }) => {
  const { addCompetitor, getCompetitors } = useCompetitors();
  const productCompetitors = getCompetitors(productId);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input_field">
            <input
              type="text"
              className="form_control"
              name="url"
              id="url"
              placeholder="Product URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>

         <div className="added_fields">
            {productCompetitors.map((competitor, index) => (
              <ul key={index}>
                <li><span className="ico ico-checkmark"></span></li>
                <li>{competitor.name}</li>
                <li><Link to={competitor.url}>{competitor.url}</Link></li>
              </ul>
            ))}
         </div>
        <div className="btn_wrap">
           <button className="btn btn_secondry" onClick={() => {
             if (name && url) {
               addCompetitor(productId, { name, url });
               setName("");
               setUrl("");
             }
           }}>
             <i className="ico ico-plus"></i> Add competitor
           </button>
           <button className="btn btn_primary" onClick={() => {
             if (name && url) {
               addCompetitor(productId, { name, url });
               setName("");
               setUrl("");
             }
           }}> Save</button>
           <button className="btn btn_cancle" onClick={onClose}> Cancle</button>
         </div>
      </div>
    </>
  );
};

export default AddCompetitor;
