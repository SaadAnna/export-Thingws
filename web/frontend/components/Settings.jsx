import React from "react";
import "./../styles/Settings.css";

const Settings = () => {
  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>Settings</h2>
        <div>
          <button className="cancel-btn">Cancel</button>
          <button className="save-btn">Save</button>
        </div>
      </div>

      <div className="export-box">
        <div className="row">
          <label>Export file name</label>
          <input type="text" value="Name-%date_time%" readOnly />
          <a href="#" className="dynamic-link">Insert %date_time%</a>
        </div>

        <div className="row">
          <label>Export file format</label>
          <select>
            <option>XLSX</option>
          </select>
        </div>

        <div className="row">
          <label>Orders per page</label>
          <select>
            <option>20</option>
            <option>50</option>
          </select>
        </div>
      </div>

      <div className="columns-box">
        {["ID", "Product", "Shipping Address", "Order Total", "Order Status"].map((label, idx) => (
          <div key={idx} className="column-row">
            <div className="handle">☰</div>
            <label className={`switch-label ${label !== "ID" ? "active" : ""}`}>
              <input type="checkbox" defaultChecked={label !== "ID"} />
              <span>{label}</span>
            </label>
          </div>
        ))}

        <div className="column-config">
          <label>Column Title</label>
          <input type="text" value="Order Status" readOnly />
          <small>Will be used in Excel export.</small>

          <label>Column content</label>
          <div className="tag-container">
            <span className="tag">Fulfillment status</span>
            <span className="tag">Financial status</span>
          </div>
        </div>

        <button className="add-column-btn">Add column</button>
      </div>
    </div>
  );
};

export default Settings;
