import { useEffect, useReducer } from 'react';
import Context from './Context';

import reducer, { initState } from './cartReducer';
import axios from 'axios';
function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState);

    useEffect(() => {}, initState);

    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export default Provider;
