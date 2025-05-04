import React from 'react';
import './ExportModal.css';

const ExportConfirmationModal = () => {
  return (
    <div className="export-modal">
      <div className="loading-banner">
        <h3>Loading</h3>
        <p>The export file will be delivered by email to <strong>example@email.com</strong>.</p>
        <p>You can close this page.</p>
      </div>
      <div className="actions">
        <button className="primary-button">Back to Orders</button>
        <button className="secondary-button">Cancel Export</button>
      </div>
    </div>
  );
};

export default ExportConfirmationModal;