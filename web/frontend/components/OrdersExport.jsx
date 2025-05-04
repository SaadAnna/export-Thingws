import React from "react";
import "./../styles/OrdersToExport.css";

const OrdersToExport = () => {
  return (
    <div className="orders-container">
      <h2 className="page-title">Orders to export</h2>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
  <a href="/settings" className="link">Go to Settings</a>
</div>

      <div className="filters">
        <button className="filter-btn">Select date range</button>
        <select className="filter-select">
          <option>Order Status</option>
          <option>All</option>
        </select>
        <select className="filter-select">
          <option>Payment Status</option>
          <option>All</option>
        </select>
        <select className="filter-select">
          <option>Fulfillment Status</option>
          <option>All</option>
        </select>
      </div>

      <div className="actions">
        <button className="export-all">Export All</button>
        <button className="export-filtered">Export filtered</button>
        <button className="clear-filters">Clear filters</button>
      </div>

      <div className="empty-state">
        <p>You have no orders yet.</p>
      </div>

      <div className="footer">
        <p>Need help? <span className="link">Contact Us!</span></p>
      </div>
    </div>
  );
};

export default OrdersToExport;
