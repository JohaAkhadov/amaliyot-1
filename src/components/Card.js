import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/action';

function Card({ img, price, title }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const item = {
      id: 1, 
      img,
      price,
      title,
    };

    dispatch(addItem(item));
  };

  return (
    <div className="card">
      <img className="card_img" src={img} alt="" />
      <p>{price}₽</p>
      <h5>{title}</h5>
      <h6>артикул 249202376</h6>
      <button onClick={handleAddToCart}>
        <img src="./img/fi_shopping-cart (1).png" alt="" />
        <span>В корзину</span>
      </button>
    </div>
  );
}

export default Card;