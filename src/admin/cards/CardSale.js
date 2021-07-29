import React from 'react';

const CardSale = ({ item, number }) => {
  const IMG_URL = 'https://server-dgerz.herokuapp.com/sale/';

  return (
    <>
      <tr>
        <td>{number}</td>
        <td>{item.name}</td>
        <td>{item.create}</td>
        <img src={`${IMG_URL}${item.images}`} width="50%" alt={item.images} />
      </tr>
    </>
  );
};

export default CardSale;
