import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
      padding: '15px 30px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    brand: {
      color: '#fff',
      fontSize: '1.5em',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    links: {
      listStyle: 'none',
      display: 'flex',
      gap: '20px',
      margin: '0',
      padding: '0',
    },
    link: {
      color: '#fff',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '1.1em',
      transition: 'color 0.3s ease',
    },
    linkHover: {
      color: '#333',
    },
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = styles.linkHover.color;
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = styles.link.color;
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.brand}>Foodie's Delight</h1>
      <ul style={styles.links}>
        <li>
          <Link
            to="/"
            style={styles.link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            style={styles.link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={styles.link}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
