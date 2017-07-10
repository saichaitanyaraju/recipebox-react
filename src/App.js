import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './components/FooterComponent.js';
import Header from './components/HeaderComponent.js';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Footer />
      </div>
    );
  }
}

export default App;
