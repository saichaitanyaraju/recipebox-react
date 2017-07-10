import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar _transparent">
        <div className="navbar-brand">
          {this.props.brandname}
        </div>
        <ul className="navbar-menu">
          <li>Home</li>
          <li>Recipes</li>
          <li onClick={this.props.showForm.bind(this)}>Add New</li>
        </ul>
      </nav>
    );
  }
}

export default Header;
