import React from 'react';
import logo from '../img/logo.svg';
import icon1 from '../img/1.svg';
import icon2 from '../img/2.svg';
import icon3 from '../img/3.svg';
import icon4 from '../img/4.svg';
import '../App.css';

function Footer() {
  return (
    <footer className="footer">
      <a className="App-link" href="\">
        <img src={logo} className="App-logo" alt="logo" />
      </a>

      <p className="footer_text">2022 Pembrock Fin Corporation</p>

      <div className="involved_social">
        <img src={icon1} alt="icon" className="social" />
        <img src={icon2} alt="icon" className="social" />
        <img src={icon3} alt="icon" className="social" />
        <img src={icon4} alt="icon" className="social" />
      </div>
    </footer>
  );
}

export default Footer;
