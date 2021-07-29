import React from 'react';
import logoDgerz from '../img/logo-dgerz.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav class=" d-flex align-items-center shadow-sm fixed-top">
        <div class="container d-flex justify-content-between align-items-center p-2">
          <div class="profile">
            <i class="far fa-user"></i>
          </div>
          <div class="logo d-flex justify-content-center flex-column align-items-center">
            <img src={logoDgerz} alt="logo-dgerz" width="250px" />
            <div class="link">
              <ul class="d-flex">
                <li>
                  <Link class="link-nav">new arrivals</Link>
                </li>
                <li>
                  <Link class="link-nav">category</Link>
                </li>
                <li>
                  <Link class="link-nav">store</Link>
                </li>
                <li>
                  <Link class="link-nav">sale</Link>
                </li>
                <li>
                  <Link class="link-nav">how to order</Link>
                </li>
              </ul>
            </div>
          </div>
          <div class="cart">
            <p>cart (0)</p>
          </div>
          <div class="hamburger-menu">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
