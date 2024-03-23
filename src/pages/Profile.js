import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getUID from 'uid-generator-package';

function Profile() {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState('');
  const [card, setCard] = useState({
    id: '',
    img: '',
    price: '',
    title: '',
    article: '',
    color: '',
    rating: ''
  });


  function getCard(e) {
    setCard({
      ...card,
      [e.target.name]: e.target.value
    });
  }

  function getCards() {
    axios.get("http://localhost:5000/category")
    .then((response) => setCards(response.data))
    .catch(er => setError(er.message))
  };
  useEffect(() => {
    getCards();
  }, [])
  
  function clear() {
    setCard({
      id: '',
      img: '',
      price: '',
      title: '',
      article: '',
      color: '',
      rating: ''
    });
    // getCards();
  }
  const navigate = useNavigate()
  function addFunction() {
    if (card.title.length > 0) {
      if (card.id === '') {
        axios.post("http://localhost:5000/category", { ...card, id: getUID() })
      }
      else {
        axios.put(`http://localhost:5000/category/${card.id}`)
      }
      clear()
      getCards()
      navigate('/lateks')
    }
    else {
      alert('Please fill in the all blanks!')
    }
  }


  return (
    <div className='profile'>
      <h1>Add new Card</h1>
      <form>
        <label>
          <p>IMG</p>
          <input onChange={(e) => getCard(e)} type='text' name='img' placeholder='Img the card' />
        </label>
        <label>
          <p>Price</p>
          <input onChange={getCard} type='number' name='price' placeholder='Price the card' />
        </label>
        <label>
          <p>Title</p>
          <input onChange={getCard} type='text' name='title' placeholder='Title the card' />
        </label>
        <label>
          <p>Article</p>
          <input onChange={getCard} type='text' name='article' placeholder='Article the card' />
        </label>
        <label>
          <p>Rating</p>
          <input onChange={getCard} type='text' name='rating' placeholder='Rating the card' />
        </label>
        <label>
          <p>Color</p>
          <input onChange={getCard} type='text' name='color' placeholder='Color the card' />
        </label>
        <div className='profileBtns'>
          <button type='button' onClick={addFunction}>Add</button>
          <button onClick={(e) => clear(e)}>Clear</button>
        </div>
      </form>
    </div>
  );
}

export default Profile;