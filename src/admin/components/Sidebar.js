import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo-dgerz-white.svg';

function Sidebar() {
  return (
    <>
      <div class="sidebar">
        <div class="sidebar-wrapper">
          <div class="logo">
            <Link to="/admin" class="simple-text" style={{ textDecoration: 'none' }}>
              <img src={logo} alt="donstore" width="80%" />
            </Link>
          </div>
          <ul class="nav">
            <li class="nav-item active">
              <Link class="nav-link" to="/admin" style={{ backgroundColor: 'transparent' }}>
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Dashboard</p>
              </Link>
            </li>
            <hr style={{ backgroundColor: 'white' }} />
            <li>
              <Link class="nav-link" to="/addCategory">
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Add Category</p>
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/edit">
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Edit Category</p>
              </Link>
            </li>
            <hr style={{ backgroundColor: 'white' }} />
            <li>
              <Link class="nav-link" to="/addSale">
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Add Sale</p>
              </Link>
            </li>
            <li>
              <Link class="nav-link" to="/editCollect">
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Edit Sale</p>
              </Link>
            </li>
            <hr style={{ backgroundColor: 'white' }} />
            <li>
              <Link class="nav-link" to="/itemsSale">
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Items Sale</p>
              </Link>
            </li>
            <hr style={{ backgroundColor: 'white' }} />
            <li>
              <Link class="nav-link" to="/itemsCategory">
                <p style={{ color: 'white', fontWeight: '500', fontSize: '15px' }}>Items Category</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
