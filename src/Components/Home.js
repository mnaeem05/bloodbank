import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  box01:{
    fontWeight: 'bold',
    fontSize: 20,
    color: '#ff6666',
    fontFamily: "monospace",
    textDecoration: "none",
  },
}

export default class Home extends Component {
  render() {
    return (
        <div>  
              <ul>
        <li ><Link style={styles.box01} to="/signup">Sign Up</Link></li>
        <li><Link style={styles.box01} to="/">Sign In</Link></li>
        <li><Link style={styles.box01} to="/dashboard">Dashboard</Link></li>
        <li><Link style={styles.box01} to="/contact">Contact</Link></li>
        </ul>
        </div>
    )
  }
}
