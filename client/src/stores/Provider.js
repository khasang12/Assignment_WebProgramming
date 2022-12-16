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
  //   window.addEventListener('load', async (event) => {
  //     if (sessionStorage.user) {
  //       await getCurrentUser();
  //       await getCartAPI().then((res) => dispatch(setCart(res)));
  //     } else {
  //       await dispatch(setUser(''));
  //       await dispatch(setCart([]));
  //     }
  //   });
  //   const getCurrentUser = async () => {
  //     if (sessionStorage.user) {
  //       let user = JSON.parse(sessionStorage.user);
  //       console.log(user);
  //       await dispatch(setUser(user));
  //     } else console.log('chưa đăng nhập');
  //   };
  //   useEffect(() => {
  //     let timer = window.setTimeout(() => {
  //       getCurrentUser();
  //     }, 1000);

  //     return clearTimeout(timer);
  //   }, []);
  useEffect(() => {
    let timer = window.setTimeout(() => {
      getCartAPI().then((res) => dispatch(setCart(res)));
    }, 1000);

    return clearTimeout(timer);
  }, []);

  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export default Provider;