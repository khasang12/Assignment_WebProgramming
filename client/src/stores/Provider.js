import { useEffect, useReducer } from 'react';
import Context from './Context';

import reducer, { initState } from './reducer';
import axios from 'axios';
import { setCart, setUser } from './actions';
import { getCartAPI } from '../api/cartAPI';
function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);
    window.addEventListener('load', async (event) => {
        if (sessionStorage.user) {
            await getCurrentUser();
            await getCartAPI().then((res) => dispatch(setCart(res)));
        } else {
            await dispatch(setUser(''));
            await dispatch(setCart([]));
        }
    });
    const getCurrentUser = async () => {
        if (sessionStorage.user) {
            let user = JSON.parse(sessionStorage.user);
            console.log(user);
            await dispatch(setUser(user));
        } else console.log('chưa đăng nhập');
    };
    useEffect(() => {
        getCurrentUser();
    }, []);
    useEffect(() => {
        getCartAPI().then((res) => dispatch(setCart(res)));
    }, []);

    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export default Provider;
