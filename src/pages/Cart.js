import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/action';

function Cart() {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(addItem(item));
  };

  const handleDecrement = (item) => {
    dispatch(delItem(item));
  };

  const handleRemove = (item) => {
    dispatch(delItem(item));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.ms;
    }, 0);
  };

  return (
    <div className='cart'>
      {cartItems.length === 0 ? (
        <div className="emptydiv">
          <img src="./img/shopping-cart.png" alt="" />
          <h1>В корзине пока пусто</h1>
        </div>
      ) : (
        <div className="cartCards">
          <h1 className='cart_h1'>Cart</h1>
          {cartItems.map((item) => (
            <div className='cardDiv' key={item.id}>
              <div>
                <img src={item.img} alt={item.name} />
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.article}</p>
                <h5>Price: ${item.price}</h5>
              </div>
              <div className='plusminus'>
                <button className='plusminus_button' onClick={() => handleDecrement(item)}>-</button>
                <span>{item.ms}</span>
                <button className='plusminus_button' onClick={() => handleIncrement(item)}>+</button>
                <div className='remove'>
                  <button onClick={() => handleRemove(item)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <p className='totalPrice'>Total Price: ${calculateTotalPrice()}</p>
    </div>
  );
}

export default Cart;