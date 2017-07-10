import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar _transparent">
        <div className="navbar-brand">
          Tets
        </div>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Recipes</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
