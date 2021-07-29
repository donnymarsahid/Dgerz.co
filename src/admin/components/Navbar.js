import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  async function logout() {
    if (window.confirm('Are You Sure ?')) {
      localStorage.clear('token');
    }
  }

  return (
    <>
      <nav class="navbar navbar-expand-lg " color-on-scroll="500">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/admin">
            Dashboard
          </Link>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-bar burger-lines"></span>
            <span class="navbar-toggler-bar burger-lines"></span>
            <span class="navbar-toggler-bar burger-lines"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navigation">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/admin">
                  <span class="no-icon">Admin</span>
                </Link>
              </li>
              <li class="nav-item dropdown">
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link class="dropdown-item" to="/admin">
                    Action
                  </Link>
                  <Link class="dropdown-item" to="/admin">
                    Something
                  </Link>
                  <div class="divider"></div>
                  <Link class="dropdown-item" to="/admin">
                    Separated link
                  </Link>
                </div>
              </li>
              <li class="nav-item">
                <Link class="nav-link">
                  <span class="no-icon" onClick={logout}>
                    Log out
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
