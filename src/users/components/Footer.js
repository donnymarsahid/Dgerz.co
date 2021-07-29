import React from 'react';
import { Link } from 'react-router-dom';
import '../css/responsive.css';

function Footer() {
  return (
    <>
      <footer class="d-flex flex-column">
        <div class="container d-flex justify-content-between">
          <div class="about-shop">
            <p>ABOUT THE SHOP</p>
            <p class="txt">Dgerz merupakan brand dengan multi produk dan merupakan clothing brand asal Jakarta sejak tahun 2021.</p>
            <div class="footer-menu-mobile">
              <p>FOOTER MENU</p>
              <div class="link">
                <ul>
                  <Link class="link-footer">
                    <li>Search</li>
                  </Link>
                  <Link class="link-footer">
                    <li>Contact Us</li>
                  </Link>
                  <Link class="link-footer">
                    <li>About Us</li>
                  </Link>
                  <Link class="link-footer">
                    <li>Terms & Conditions</li>
                  </Link>
                  <Link class="link-footer">
                    <li>Privacy Policy</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-menu">
            <p>FOOTER MENU</p>
            <div class="link">
              <ul>
                <Link class="link-footer">
                  <li>Search</li>
                </Link>
                <Link class="link-footer">
                  <li>Contact Us</li>
                </Link>
                <Link class="link-footer">
                  <li>About Us</li>
                </Link>
                <Link class="link-footer">
                  <li>Terms & Conditions</li>
                </Link>
                <Link class="link-footer">
                  <li>Privacy Policy</li>
                </Link>
              </ul>
            </div>
          </div>
          <div class="subscribe">
            <p>SUBSCRIBE NOW</p>
            <p class="txt">Subscribe and get Discount 15%</p>
            <input type="text" name="name" id="name" placeholder="Enter your email address" />
            <br />
            <button type="submit" class="btn">
              SUBSCRIBE
            </button>
          </div>
        </div>
        <div class="container container-footer d-flex justify-content-center">
          <div class="copyright d-flex justify-content-center">&copy; copyright 2021 | Donny Marsahid</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
