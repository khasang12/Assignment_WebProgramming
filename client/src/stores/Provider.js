import { useEffect, useReducer } from 'react';
import Context from './Context';

import reducer from './reducer';
import axios from 'axios';
import { setCart, setUser } from './actions';
import { getCartAPI } from '../api/cartAPI';
function Provider({ children }) {
  const initState = {
    cart: { products: [] },
  };
  const [state, dispatch] = useReducer(reducer, initState);


  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export default Provider;