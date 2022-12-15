import {
  ADD_CART,
  REMOVE_CART_ITEM,
  SELECT_ALL_CART_ITEM,
  SELECT_CART_ITEM,
  UPDATE_CART,
  SET_CART,
  SET_USER,
} from './constants';

export const selectAllProducts = (payload) => ({
  type: SELECT_ALL_CART_ITEM,
  payload,
});

export const selectItem = (payload) => ({
  type: SELECT_CART_ITEM,
  payload,
});

export const updateCart = (payload) => ({
  type: UPDATE_CART,
  payload,
});

export const removeCartItem = (payload) => ({
  type: REMOVE_CART_ITEM,
  payload,
});

export const addToCart = (payload) => {
  return {
    type: ADD_CART,
    payload,
  };
};

export const setUser = (payload) => ({
  type: SET_USER,
  payload,
});

export const setCart = (payload) => {
  return { type: SET_CART, payload };
};
