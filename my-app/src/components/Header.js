import React from 'react';
import logo from '../img/logo.svg';
import '../App.css';

function Header() {
  return (
    <header>
      <a className="App-link" href="\">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
    </header>
  );
}

export default Header;
