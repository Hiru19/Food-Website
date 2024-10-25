import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Add fade-in animation to elements on load
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.2}s`;
      el.classList.add('visible');
    });
  }, []);

  const styles = {
    home: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f4f7f9',
      color: '#333',
      fontFamily: 'Arial, sans-serif',
    },
    hero: {
      padding: '80px 20px',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      margin: '20px',
      backgroundImage: 'url("src/assets/home.jpg")', // Background image
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff', // Adjust color for readability
      position: 'relative',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text visibility
      borderRadius: '12px',
    },
    content: {
      position: 'relative',
      zIndex: 2,
      color: '#fff', // White text over the background
    },
    title: {
      fontSize: '2.5em',
      fontWeight: 'bold',
      color: '#004080',
      marginBottom: '20px',
    },
    subtitle: {
      fontSize: '1.2em',
      fontWeight: '300',
      color: '#555',
      marginBottom: '30px',
    },
    button: {
      padding: '12px 24px',
      fontSize: '1em',
      backgroundColor: '#004080',
      color: '#ffffff',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#0059b3',
      transform: 'scale(1.05)',
    },
    image: {
      width: '100%',
      maxWidth: '300px',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginBottom: '20px',
    },
  };

  return (
    <div style={styles.home}>
      <div style={styles.hero} className="fade-in">
        <div style={styles.overlay}></div>
        <div style={styles.content}>
          {/* Option 2: Inline Image */}
          <img
            src="https://source.unsplash.com/random/300x300" // Random Unsplash image
            alt="Foodie Delight"
            style={styles.image}
          />
          <h1 style={styles.title}>Welcome to Foodie's Delight</h1>
          <p style={styles.subtitle}>Embark on a journey of taste and delight with us!</p>
        </div>
      </div>
    </div>
  );
};

// CSS for fade-in effect
const animationStyles = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Append the animation styles to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);

export default Home;
