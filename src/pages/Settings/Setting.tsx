
import { Link } from "react-router-dom"
import "./Setting.scss"
const page = () => {
  return (
     <div className="settings_page">
      <div className="container">
        <div className="setting_head">
          <h1>Settings</h1>
          <p>Manage your store integrations and preferences</p>
        </div>
        <div className="setting_box">
          <span className="bx_title">Store integration</span>
          
          <div className="inner_content">
            <strong className="sub_heading">Connected store</strong>
            <div className="connection_row">
              <div className="lft_col">
                <strong className="title">Shopify Store</strong>
                <Link to="">mystore.shopify.com</Link>
              </div>
              <div className="rgt_col">
                <button className="btn btn_outline">Disconnect</button>
              </div>
            </div>
          </div>
        </div>
        <div className="setting_box">
          <span className="bx_title">Account</span>
          
          <div className="inner_content">
            <div className="form_group">
              <label htmlFor="">Email address</label>
              <input type="email" className="form_control" name="" id="" placeholder="john@example.com" />
            </div>
            <div className="form_group">
              <label htmlFor="">Email address</label>
             <div className="premium_plan">
              <div className="pre_lft">
                <strong className="pre_title">Premium Plan</strong>
                <p>50 products comparison, 10 competitors</p>
              </div>
              <div className="pre_rgt">
                <Link to="" className="btn btn_outline">Change plan</Link>
              </div>
             </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  )
}

export default page