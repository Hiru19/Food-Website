import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
      fontSize: '1.1em',
      fontWeight: '500',
      position: 'relative',
      boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.15)',
      transition: 'transform 0.3s ease-in-out',
      cursor: 'pointer',
    },
    text: {
      margin: '0',
      padding: '5px',
      fontFamily: "'Helvetica Neue', sans-serif",
      letterSpacing: '0.5px',
      opacity: '0.9',
      position: 'relative',
    },
    underline: {
      content: '""',
      display: 'block',
      width: '50px',
      height: '2px',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      margin: '10px auto 0',
      transition: 'width 0.3s ease',
    },
  };

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'scale(1.02)';
    e.currentTarget.querySelector('.underline').style.width = '80px';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.querySelector('.underline').style.width = '50px';
  };

  return (
    <footer
      style={styles.footer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p style={styles.text}>
        © 2024 Foodie's Delight. All rights reserved.
        <span className="underline" style={styles.underline}></span>
      </p>
    </footer>
  );
};

export default Footer;
