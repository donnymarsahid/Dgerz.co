import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import './css/user.css';
import './css/responsive.css';
import bgHeader from './img/bg-header.png';
import bgContent from './img/content.png';
import api from '../api/server';
import CardSale from './cards/CardSale';
import CardCategory from './cards/CardCategory';
import Footer from './components/Footer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const User = () => {
  const [sale, setSale] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    api.get('/sale/').then((res) => {
      setSale(res.data);
    });
    api.get('/category/').then((res) => {
      setCategory(res.data);
    });
  }, []);

  const cardSale = sale.map((item) => {
    return <CardSale item={item} key={item.id} />;
  });

  const cardCategory = category.map((category) => {
    return <CardCategory category={category} key={category.id} />;
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrow: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: false,

          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: false,

          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: false,

          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

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
          <p class="lead">WEEKEND`HANGOUT</p>
          <Link>
            <button class="btn">Ready</button>
          </Link>
        </div>
      </div>
      <div class="content-category">
        <h3 class="category text-center text-uppercase">on`category</h3>
        <Slider {...settings} class="row row-category" style={{ margin: '5px' }}>
          {cardCategory}
        </Slider>
      </div>
      <div class="promo text-center">
        <p>Discount 20% | for first order</p>
        <p>Register first to get a Discount 20%</p>
        <Link to="/comingsoon">
          <button className="btn btn-sign-up text-uppercase">Sign Up</button>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default User;
