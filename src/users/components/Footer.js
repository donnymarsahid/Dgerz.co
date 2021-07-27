import React from 'react';
import { Instagram, Linkedin, Github } from 'react-bootstrap-icons';

function Footer() {
  return (
    <>
      <footer>
        <div class="footer-content">
          <div class="social-media">
            <p>ABOUT US</p>
            <p>CONTACT US</p>
            <div class="social-media">
              <Instagram size={30} className="me-3 icons-social" />
              <Linkedin size={30} className="me-3 icons-social" />
              <Github size={30} className="icons-social" />
            </div>
          </div>
          <div class="copyright"> &copy; copyright Donny 2021 | all rights reserved</div>
          <div class="privacy">
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
