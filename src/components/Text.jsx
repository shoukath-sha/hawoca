import React from 'react';

const Text = () => {
  const styles = {
    container: {
      backgroundColor: '#000',
      color: '#fff',
      padding: '5% 8%',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    },
    title: {
      fontSize: '4.5rem',
      fontWeight: 500,
      lineHeight: 1.1,
      marginBottom: '2rem',
      maxWidth: '90%',
    },
    tagline: {
      fontSize: '3.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
      marginBottom: '0.5rem',
    },
    subheading: {
      fontSize: '3.5rem',
      fontWeight: 500,
      lineHeight: 1.2,
      marginBottom: '3rem',
    },
    description: {
      fontSize: '1.15rem',
      lineHeight: 1.5,
      maxWidth: '800px',
    },
    strong: {
      fontWeight: 600,
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Graphic Design Company in <br />  Dubai – Services</h1>
      <h2 style={styles.tagline}>We don't stop at "pretty"</h2>
      <h3 style={styles.subheading}>This is how we make it matter</h3>
      
      <div style={styles.description}>
        <strong style={styles.strong}>A brand needs to capture wonder and improve daily life.</strong> We develop the complete 
        anatomy of a brand—purpose, positioning and personality—with the goal to instill 
        a sense of wonder and generate value.
      </div>
    </div>
  );
};

export default Text;
