import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import api from '../../api/server';
import { Link } from 'react-router-dom';

const DetailCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    api.get('/category/').then((res) => {
      setCategory(res.data);
    });
  }, []);

  const cardCategory = category.map((category, index) => {
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{category.name}</td>
        <td>
          <Link to={`/editCategory/${category.id}`}>
            <button class="btn btn-primary me-2">Edit</button>
          </Link>
          <button class="btn btn-danger">delete</button>
        </td>
      </tr>
    );
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
                  <h4 class="card-title">Edit Category</h4>
                </div>
                <table class="table table-hover table-striped">
                  <thead>
                    <th>No</th>
                    <th>Name</th>
                    <th>Action</th>
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

export default DetailCategory;
