import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Binary Search Tree Application</h1>
      <p>
        This application allows you to create a binary search tree from a series of numbers, visualize the resulting tree, and view previous tree results.
      </p>
      <div style={styles.buttonContainer}>
        <Link to="/enter-numbers" style={styles.button}>
          Get Started
        </Link>
        <Link to="/previous-trees" style={styles.button}>
          View Previous Trees
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#f9f9f9',
  },
  buttonContainer: {
    marginTop: '20px',
  },
  button: {
    margin: '10px',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s',
  },
};

export default LandingPage;