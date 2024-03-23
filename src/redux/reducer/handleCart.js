import React from 'react';

const initialCartState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

function handleCart(state = initialCartState, action) {
  const { payload } = action; // Access payload consistently

  switch (action.type) {
    case "ADDITEM":
      const existingItem = state.find((x) => x.id === payload.id);

      if (existingItem) {
        const updatedState = state.map((x) =>
          x.id === payload.id ? { ...x, ms: x.ms + 1 } : x
        );
        localStorage.setItem('cart', JSON.stringify(updatedState));
        return updatedState;
      } else {
        const updatedState = [...state, { ...payload, ms: 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedState));
        return updatedState;
      }

    case "DELITEM":
      const itemToRemove = state.find((x) => x.id === payload.id);

      if (itemToRemove?.ms === 1) {
        const updatedState = state.filter((x) => x.id !== payload.id);
        localStorage.setItem('cart', JSON.stringify(updatedState));
        return updatedState;
      } else {
        const updatedState = state.map((x) =>
          x.id === payload.id ? { ...x, ms: x.ms - 1 } : x
        );
        localStorage.setItem('cart', JSON.stringify(updatedState));
        return updatedState;
      }

    default:
      return state;
  }
}

export default handleCart;