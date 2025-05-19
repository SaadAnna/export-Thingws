import React, { useState } from 'react';
import './DataTable.css';

const DataTable = () => {
  // Sample data matching the image
  const data = [
    { id: 1, product: 'Label', variant: 'Label', skuNumber: '334590-095', unitsSold: 13, total: '$150.00' },
    { id: 2, product: 'Label', variant: 'Label', skuNumber: '000545432', unitsSold: 30, total: '$150.00' },
    { id: 3, product: 'Label', variant: 'Label', skuNumber: '188904989', unitsSold: 11, total: '$150.00' },
    { id: 4, product: 'Label', variant: 'Label', skuNumber: '003578948', unitsSold: 8, total: '$150.00' },
    { id: 5, product: 'Label', variant: 'Label', skuNumber: '664433433', unitsSold: 6, total: '$150.00' },
    { id: 6, product: 'Label', variant: 'Label', skuNumber: '564698896', unitsSold: 39, total: '$150.00' },
    { id: 7, product: 'Label', variant: 'Label', skuNumber: '664433433', unitsSold: 26, total: '$150.00' },
    { id: 8, product: 'Label', variant: 'Label', skuNumber: '564698896', unitsSold: 1, total: '$150.00' },
    { id: 9, product: 'Label', variant: 'Label', skuNumber: '188904989', unitsSold: 16, total: '$150.00' },
    { id: 10, product: 'Label', variant: 'Label', skuNumber: '990555005', unitsSold: 10, total: '$150.00' },
  ];

  // State for tracking selected rows
  const [selectedRows, setSelectedRows] = useState([]);

  // Handle checkbox selection
  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // Handle select all rows
  const handleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map(item => item.id));
    }
  };

  return (
    <div className="datatable-container">
      <div className="datatable-header">
        <div className="datatable-title">Datatable</div>
      </div>
      <div className="datatable-content">
        <table className="datatable-table">
          <thead>
            <tr>
              <th className="checkbox-column">
                <input 
                  type="checkbox" 
                  checked={selectedRows.length === data.length} 
                  onChange={handleSelectAll}
                />
              </th>
              <th>Product</th>
              <th>Variant</th>
              <th>SKU Number</th>
              <th className="units-sold">
                <div className="sortable-column">
                  Units sold
                  <span className="sort-icon">▼</span>
                </div>  
              </th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td className="checkbox-column">
                  <input 
                    type="checkbox" 
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleSelectRow(row.id)}
                  />
                </td>
                <td>{row.product}</td>
                <td>{row.variant}</td>
                <td>{row.skuNumber}</td>
                <td className="units-sold">{row.unitsSold}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="datatable-footer">
        <div className="datatable-pagination">
          <button className="pagination-button">
            <span className="pagination-arrow">‹</span>
          </button>
          <button className="pagination-button">
            <span className="pagination-arrow">›</span>
          </button>
          <div className="pagination-info">Showing 1-10 of 13 results</div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;