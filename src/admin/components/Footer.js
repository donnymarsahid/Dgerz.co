import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="container-fluid">
          <nav>
            <p class="copyright text-center">
              <Link href="/"> dgerz</Link>
            </p>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
