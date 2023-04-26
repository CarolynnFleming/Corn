
import {
    REMOVE_ITEM,
    ADD_TO_CART,
    INCREASE,
    DECREASE,
    CHECKOUT,
    CLEAR,
  } from "./CartTypes.js";
  
  const Storage = (cartItems) => {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.length > 0 ? cartItems : [])
    );
  };

  export const sumItems = (cartItems) => {
    Storage(cartItems);
    return {
      itemCount: cartItems.reduce((total, prod) => total + prod.quantity , 0),
      total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
  };
  

  const CartReducer = (state, action) => {

    switch (action.type) {
      
      case ADD_TO_CART:
        if (!state.cartItems.find((item) => item.id === action.payload.id)) {
          state.cartItems.push({
            ...action.payload,
            quantity: 1,
          });
        }
  
        return {
          ...state,
          ...sumItems(state.cartItems),
          cartItems: [...state.cartItems],
        };
  
      
      case REMOVE_ITEM:
        return {
          ...state,
          ...sumItems(
            state.cartItems.filter((item) => item.id !== action.payload.id)
          ),
          cartItems: [
            ...state.cartItems.filter((item) => item.id !== action.payload.id),
          ],
        };
  
      
      case INCREASE:
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.payload.id)
        ].quantity++;
        return {
          ...state,
          cartItems: [...state.cartItems],
          ...sumItems(state.cartItems),
        };
  
   
        case DECREASE:
          state.cartItems[
            state.cartItems.findIndex((item) => item.id === action.payload.id)
          ].quantity--;
          return {
            ...state,
            cartItems: [...state.cartItems],
            ...sumItems(state.cartItems),
            
          };
  
    
      case CHECKOUT:
        return {
          cartItems: [],
          checkout: true,
          ...sumItems([]),
        };
  
      
      case CLEAR:
        return {
          cartItems: [],
          ...sumItems([]),
        };
  
    
      default:
        return state;
    }
  };
  
  export default CartReducer;
  