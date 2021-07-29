import React from 'react';

const CardSale = ({ item }) => {
  const IMG_URL = 'https://server-dgerz.herokuapp.com/sale/';
  return (
    <>
      <div class="col-md-3">
        <div class="image">
          <img src={`${IMG_URL}${item.images}`} alt={item.images} width="100%" />
          <div class="overlay"></div>
        </div>
        <div class="text text-start">
          <p class="text-uppercase">{item.name}</p>
          <p class="text-uppercase text-decoration-underline">shop now</p>
        </div>
      </div>
    </>
  );
};

export default CardSale;
