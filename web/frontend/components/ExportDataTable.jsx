import React from 'react';

const ExportDataTable = () => {
  const tableData = [
    { product: 'Label', variant: 'Label', sku: '334590-095', sold: 13, total: '$150.00' },
    // ... Add all other rows here
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Datatable</h1>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Product</th>
              <th style={styles.th}>Variant</th>
              <th style={styles.th}>SKU Number</th>
              <th style={styles.th}>Units sold</th>
              <th style={styles.th}>Total</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td style={styles.td}>{row.product}</td>
                <td style={styles.td}>{row.variant}</td>
                <td style={styles.td}>{row.sku}</td>
                <td style={{ ...styles.td, textAlign: 'right' }}>{row.sold}</td>
                <td style={{ ...styles.td, textAlign: 'right' }}>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={styles.footer}>
        Showing 13 of 13 results
      </div>
      <div style={styles.actions}>
        <button style={styles.primaryButton}>Download CSV</button>
        <button style={styles.secondaryButton}>Back to Orders</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  title: {
    fontSize: '20px',
    marginBottom: '1.5rem',
    color: '#202223',
  },
  tableWrapper: {
    border: '1px solid #e1e3e5',
    borderRadius: '4px',
    overflow: 'hidden',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    backgroundColor: '#f9fafb',
    padding: '1rem',
    textAlign: 'left',
    borderBottom: '1px solid #e1e3e5',
    fontWeight: '600',
  },
  td: {
    padding: '1rem',
    borderBottom: '1px solid #e1e3e5',
  },
  footer: {
    padding: '1rem',
    color: '#6d7175',
    fontSize: '14px',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  primaryButton: {
    backgroundColor: '#5c6ac4',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#5c6ac4',
    border: '1px solid #5c6ac4',
    borderRadius: '4px',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
  },
};

export default ExportDataTable;