import React from 'react';

const FoodCard = ({ name, image, price }) => {
  const styles = {
    card: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      width: '220px',
      transition: 'transform 0.3s, box-shadow 0.3s',
      cursor: 'pointer',
      textAlign: 'center',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transform: 'translateY(0)',
      position: 'relative',
    },
    cardHover: {
      transform: 'translateY(-10px) scale(1.05)',
      boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
    },
    imageContainer: {
      width: '100px',
      height: '100px',
      overflow: 'hidden',
      borderRadius: '50%',
      marginBottom: '15px',
      transition: 'transform 0.3s ease',
    },
    imageHover: {
      transform: 'rotate(10deg)',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    name: {
      fontSize: '1.2em',
      color: '#333',
      margin: '10px 0',
      fontWeight: '600',
    },
    price: {
      color: '#666',
      fontWeight: 'bold',
      fontSize: '1.1em',
      marginBottom: '15px',
    },
    overlay: {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.05)',
      opacity: 0,
      transition: 'opacity 0.4s',
    },
    overlayHover: {
      opacity: 1,
    },
  };

  return (
    <div
      className="food-card"
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = styles.cardHover.transform;
        e.currentTarget.style.boxShadow = styles.cardHover.boxShadow;
        e.currentTarget.querySelector('.image-container').style.transform = styles.imageHover.transform;
        e.currentTarget.querySelector('.overlay').style.opacity = styles.overlayHover.opacity;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = styles.card.transform;
        e.currentTarget.style.boxShadow = styles.card.boxShadow;
        e.currentTarget.querySelector('.image-container').style.transform = '';
        e.currentTarget.querySelector('.overlay').style.opacity = styles.overlay.opacity;
      }}
    >
      <div className="overlay" style={styles.overlay}></div>
      <div className="image-container" style={styles.imageContainer}>
        <img src={image} alt={name} style={styles.img} />
      </div>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.price}>${price}</p>
    </div>
  );
};

export default FoodCard;
