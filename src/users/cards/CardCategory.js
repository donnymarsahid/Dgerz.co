import React from 'react';

const CardCategory = ({ category }) => {
  const IMG_URL = 'https://server-dgerz.herokuapp.com/category/';
  return (
    <>
      <div class="col-md-12 category-card-loop">
        <div class="image">
          <img src={`${IMG_URL}${category.images}`} alt={category.images} width="98%" />
          <div class="overlay"></div>
        </div>
        <div class="text text-start">
          <p class="text-uppercase text-decoration-underline">{category.name}</p>
        </div>
      </div>
    </>
  );
};

export default CardCategory;
