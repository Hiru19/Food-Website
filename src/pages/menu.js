import React from 'react';

const Menu = () => {
  const styles = {
    container: {
      padding: '30px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
      color: '#fff',
      minHeight: '100vh',
    },
    title: {
      fontSize: '2.5em',
      fontWeight: '700',
      marginBottom: '20px',
      textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    },
    description: {
      fontSize: '1.2em',
      fontWeight: '300',
      marginBottom: '40px',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.6',
    },
    menuSection: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      padding: '20px',
    },
    menuItem: {
      background: '#fff',
      borderRadius: '10px',
      padding: '15px',
      color: '#333',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      textAlign: 'center',
    },
    menuItemHover: {
      transform: 'translateY(-8px)',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    },
    itemTitle: {
      fontSize: '1.3em',
      fontWeight: 'bold',
      margin: '10px 0',
    },
    itemDescription: {
      fontSize: '1em',
      color: '#666',
      margin: '8px 0',
    },
    itemPrice: {
      fontSize: '1.1em',
      color: '#ff7e5f',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Menu</h2>
      <p style={styles.description}>Explore our delicious offerings!</p>
      <div style={styles.menuSection}>
        <div style={styles.menuItem}>
          <h3 style={styles.itemTitle}>Pizza</h3>
          <p style={styles.itemDescription}>Delicious cheese pizza with fresh toppings.</p>
          <p style={styles.itemPrice}>$12.99</p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.itemTitle}>Burger</h3>
          <p style={styles.itemDescription}>Juicy beef burger with lettuce and cheese.</p>
          <p style={styles.itemPrice}>$9.99</p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.itemTitle}>Pasta</h3>
          <p style={styles.itemDescription}>Creamy pasta with a touch of garlic.</p>
          <p style={styles.itemPrice}>$10.99</p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.itemTitle}>Sushi</h3>
          <p style={styles.itemDescription}>Fresh sushi rolls with assorted fillings.</p>
          <p style={styles.itemPrice}>$15.99</p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.itemTitle}>Salad</h3>
          <p style={styles.itemDescription}>Mixed greens with a light vinaigrette.</p>
          <p style={styles.itemPrice}>$8.49</p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.itemTitle}>Steak</h3>
          <p style={styles.itemDescription}>Grilled steak cooked to perfection.</p>
          <p style={styles.itemPrice}>$24.99</p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.itemTitle}>Tacos</h3>
          <p style={styles.itemDescription}>Soft tacos filled with your choice of meat.</p>
          <p style={styles.itemPrice}>$11.49</p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.itemTitle}>Ice Cream</h3>
          <p style={styles.itemDescription}>Creamy ice cream in various flavors.</p>
          <p style={styles.itemPrice}>$5.99</p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.itemTitle}>Dumplings</h3>
          <p style={styles.itemDescription}>Steamed dumplings with savory filling.</p>
          <p style={styles.itemPrice}>$9.49</p>
        </div>
        <div style={styles.menuItem}>
          <h3 style={styles.itemTitle}>Ramen</h3>
          <p style={styles.itemDescription}>Hot ramen noodles in rich broth.</p>
          <p style={styles.itemPrice}>$13.99</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
