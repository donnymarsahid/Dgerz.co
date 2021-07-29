import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import api from '../api/server';
import CardSale from './cards/CardSale';
import CardCategory from './cards/CardCategory';

const Admin = () => {
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

  const cardSale = sale.map((item, index) => {
    return <CardSale item={item} key={item.id} number={index + 1} />;
  });

  const cardCategory = category.map((category, index) => {
    return <CardCategory category={category} key={category.id} number={index + 1} />;
  });
  return (
    <>
      <div>
        <div class="wrapper">
          <Sidebar />
          <div class="main-panel setting-for-sidebar">
            <Navbar />
            <div class="content" style={{ margin: '0' }}>
              <div class="container-fluid table-full-width table-responsive">
                <div class="card-header">
                  <h4 class="card-title">Sale Products</h4>
                  <p class="card-category text-muted">Details sale</p>
                </div>
                <table class="table table-hover table-striped mb-5">
                  <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Created at</th>
                    <th>Images</th>
                  </thead>
                  <tbody>{cardSale}</tbody>
                </table>
              </div>
              <div class="container-fluid table-full-width table-responsive">
                <div class="card-header">
                  <h4 class="card-title">Category Products</h4>
                  <p class="card-category text-muted">Details category</p>
                </div>
                <table class="table table-hover table-striped">
                  <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Created at</th>
                    <th>Images</th>
                  </thead>
                  <tbody>{cardCategory}</tbody>
                </table>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
