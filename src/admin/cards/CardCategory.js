import React from 'react';

const CardCategory = ({ category, number }) => {
  const IMG_URL = 'https://server-dgerz.herokuapp.com/category/';

  return (
    <>
      <tr>
        <td>{number}</td>
        <td>{category.name}</td>
        <td>{category.create}</td>
        <img src={`${IMG_URL}${category.images}`} width="50%" alt={category.images} />
      </tr>
    </>
  );
};

export default CardCategory;
