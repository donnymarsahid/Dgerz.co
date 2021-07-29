import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import api from '../../api/server';

const EditCategory = (props) => {
  const [category, setCategory] = useState([]);
  const [name, setName] = useState('');
  const [images, setImages] = useState('');

  const dataCategory = async () => {
    const id = props.match.params.id;
    await api.get('/category/' + id).then((res) => {
      setCategory(res.data);
    });
  };

  dataCategory();

  const handlerSubmit = (e) => {
    e.preventDefault();
    const id = props.match.params.id;
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', images);
    api.put('/category/' + id, formData).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <div>
        <div class="wrapper">
          <Sidebar />
          <div class="main-panel setting-for-sidebar">
            <Navbar />
            <div class="content" style={{ margin: '0' }}>
              <h3>Edit Category</h3>
              <form onSubmit={handlerSubmit}>
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Name :
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    name="name"
                    autoComplete="off"
                    value={category.name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label for="images" class="form-label">
                    Images :
                  </label>
                  <input
                    type="file"
                    class="form-control"
                    id="images"
                    name="images"
                    onChange={(e) => {
                      setImages(e.target.files[0]);
                    }}
                  />
                </div>
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
