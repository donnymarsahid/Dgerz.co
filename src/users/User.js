import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import './css/user.css';
import bgHeader from './img/bg-header.png';
import bgContent from './img/content.png';
import api from '../api/server';
import CardSale from './cards/CardSale';
import Footer from './components/Footer';

const User = () => {
  const [sale, setSale] = useState([]);

  const dataSale = () => {
    api.get('/sale/').then((res) => {
      setSale(res.data);
    });
  };

  dataSale();

  const cardSale = sale.map((item) => {
    return <CardSale item={item} key={item.id} />;
  });

  return (
    <>
      <Navbar />
      <header>
        <img src={bgHeader} alt="bg-header" width="100%" class="img-header" />
        <div class="overlay"></div>
        <div class="content-header  d-flex flex-column align-items-center justify-content-center">
          <h2 class="display-4">Leading Brand`2021</h2>
          <p class="lead">Do your best with your appearance</p>
          <Link>
            <button class="btn">Ready To Shop</button>
          </Link>
        </div>
      </header>
      <div class="container-fluid">
        <div class="on-sale text-center">
          <h3>on`sale</h3>
          <div class="row">{cardSale}</div>
          <Link>
            <button class="btn btn-view">View All Product</button>
          </Link>
        </div>
      </div>
      <div class="content">
        <img src={bgContent} alt="bg-content" width="100%" />
        <div class="overlay"></div>
        <div class="content-content  d-flex flex-column align-items-center justify-content-center">
          <h2 class="display-4 text-uppercase">availability</h2>
          <p class="lead">MAN | WOMEN | ACCESSORIES | WOMEN DRESSES | MEN TOPS</p>
          <Link>
            <button class="btn">Ready To Shop</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default User;
