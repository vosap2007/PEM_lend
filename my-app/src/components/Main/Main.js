import React from 'react';
import hero from '../../img/Group 34482.svg';
import mascot from '../../img/mascot.svg';
import meta_yield from '../../img/meta_yield.svg';
import skyward from '../../img/skyward.svg';
import bch from '../../img/bch.svg';
import aurora from '../../img/aurora.svg';
import icon1 from '../../img/1.svg';
import icon2 from '../../img/2.svg';
import icon3 from '../../img/3.svg';
import icon4 from '../../img/4.svg';

import '../Main/Main';

const partners = [
  {
    logo: meta_yield,
    name: 'Meta Yield',
    total: '3 000 000 PEM',
    sales: 'May, 10th',
    price: ' 0,01 NEAR',
  },
  {
    logo: skyward,
    name: 'Skyward',
    total: '3 000 000 PEM',
    sales: 'May, 11th',
    price: ' 0,01 NEAR',
  },
  {
    logo: bch,
    name: 'Boca Chica (To The Mars)',
    total: '1 000 000 PEM',
    sales: 'May, 14th',
    price: ' 0,01 NEAR',
  },
  {
    logo: aurora,
    name: 'SmartPad (Aurora)',
    total: '1 000 000 PEM',
    sales: 'May, 16th',
    price: '0,1 USDT',
  },
];

function Main() {
  return (
    <main className="main">
      <section class="hero">
        <div className="hero_title">
          <h1 className="hero_title_first">
            It's time to <span className="hero_title_too">PembRock</span>!
          </h1>
          <button className="hero_button">Buy $PEM</button>
        </div>
        <div className="hero_img">
          <img src={hero} alt="hero" />
          <img src={mascot} alt="hero" className="mascot" />
        </div>
      </section>

      <section className="partners">
        <h1 className="partners_title">It's adventure time for NEARians!</h1>
        <p className="partners_text">
          PembRock Finance is the first leveraged yield farming platform built
          on NEAR protocol. Users can leverage their funds by up to 3x for
          greater yields within a secure and easy-to-use platform. Also, it's a
          cool doggo!
        </p>
        <div className="partners_blocks">
          {partners.map((partner) => {
            return (
              <div className="partners_block">
                <div className="partners_status_block">
                  <img src={partner.logo} alt="logo" />
                  <div className="partners_status">Status</div>
                </div>
                <p className="partners_name">{partner.name}</p>

                <p className="partners_name_title">Total Amount</p>
                <h2 className="partners_name_data">{partner.total}</h2>

                <p className="partners_name_title">Start of Sales</p>
                <h2 className="partners_name_data">{partner.sales}</h2>

                <div>
                  <p className="partners_name_title">Priсe</p>
                  <div className="partners_name_block">
                    <h2 className="partners_name_data">{partner.price}</h2>
                    <button className="partners_button">Stake</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="involved">
        <div className="involved_title_block">
          <h1 className="involved_title">Get involved with PembRock</h1>
          <a className="involved_link">Visit our website</a>
        </div>
        <p className="involved_text">Want to learn more about our project?</p>
        <div className="involved_social">
          <img src={icon1} alt="icon" className="social" />
          <img src={icon2} alt="icon" className="social" />
          <img src={icon3} alt="icon" className="social" />
          <img src={icon4} alt="icon" className="social" />
        </div>
      </section>
    </main>
  );
}

export default Main;
