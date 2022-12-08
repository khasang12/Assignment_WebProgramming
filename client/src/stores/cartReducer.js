import { ADD_CART, GET_CART, REMOVE_CART_ITEM, SELECT_ALL_CART_ITEM, SELECT_CART_ITEM, UPDATE_CART } from './constants';
import { products } from './fakeData';

const initState = {
    cart: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case GET_CART: {
            return {
                ...state,
                cart: action.payload,
            };
        }
        case SELECT_ALL_CART_ITEM: {
            let newCart = state.cart.map((item) => ({ ...item, isSelected: action.payload }));
            return {
                ...state,
                cart: newCart,
            };
        }
        case SELECT_CART_ITEM: {
            let newCart = state.cart;
            let i = newCart.findIndex((item) => item.id === action.payload);
            newCart[i].isSelected = !newCart[i].isSelected;
            return {
                ...state,
                cart: newCart,
            };
        }

        case REMOVE_CART_ITEM: {
            let newCart = state.cart.filter((item) => item.id !== action.payload);
            return {
                ...state,
                cart: newCart,
            };
        }

        case UPDATE_CART: {
            return {
                ...state,
            };
        }

        case ADD_CART: {
            let newCart = state.cart;
            let i = newCart.findIndex((item) => item.id === action.payload.id);
            if (i >= 0) {
                newCart[i].quantity++;
            } else newCart.push(action.payload);
            return {
                ...state,
                newCart,
            };
        }
        default:
            return new Error('Invalid action!');
    }
};

export { initState };

export default reducer;
