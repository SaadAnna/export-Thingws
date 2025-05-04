import React from 'react';

const ExportReadyPage = () => {
  // Simulate download trigger (replace with your actual logic)
  const handleDownload = () => {
    console.log("Download triggered");
    // Add your download logic here (e.g., window.location.href = 'export.csv')
  };
  
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Ready</h2>
        <p style={styles.message}>Your export file is ready</p>
        <p style={styles.hint}>
          If your download didn't start in 5 seconds,{" "}
          <button onClick={handleDownload} style={styles.linkButton}>
            try again
          </button>.
        </p>
        <div style={styles.actions}>
          <button style={styles.primaryButton} onClick={handleDownload}>
            Download Now
          </button>
          <button style={styles.secondaryButton} onClick={() => window.close()}>
            Close Page
          </button>
        </div>
      </div>
    </div>
  );
};

// Inline CSS (no separate file needed)
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '2rem',
    maxWidth: '500px',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    color: '#202223',
    marginBottom: '0.5rem',
  },
  message: {
    fontSize: '16px',
    color: '#6d7175',
    marginBottom: '1.5rem',
  },
  hint: {
    fontSize: '14px',
    color: '#6d7175',
    marginBottom: '2rem',
  },
  linkButton: {
    background: 'none',
    border: 'none',
    color: '#5c6ac4',
    textDecoration: 'underline',
    cursor: 'pointer',
    padding: '0',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
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

export default ExportReadyPage;
