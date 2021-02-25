import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid container">
          <a className="navbar-brand" href="/">
            WikiCountries
          </a>
        </div>
      </nav>
    );
  }
}
export default Navbar;