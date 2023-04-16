// /src/Context/Cart/CartReducer.jsx

//Import the Action types
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
  
  // Export function to calculate the total price of the cart and the total quantity of the cart
  export const sumItems = (cartItems) => {
    Storage(cartItems);
    return {
      itemCount: cartItems.reduce((total, prod) => total + prod.quantity , 0),
      total: cartItems.reduce((total, prod) => total + (prod.price * prod.quantity), 0)
    }
  };
  
  // The reducer is listening for an action, which is the type that we defined in the CartTypes.js file
  const CartReducer = (state, action) => {
    // The switch statement is checking the type of action that is being passed in
    switch (action.type) {
      // If the action type is ADD_TO_CART, we want to add the item to the cartItems array
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
  
      // If the action type is REMOVE_ITEM, we want to remove the item from the cartItems array
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
  
      // If the action type is INCREASE, we want to increase the quantity of the particular item in the cartItems array
      case INCREASE:
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.payload.id)
        ].quantity++;
        return {
          ...state,
          cartItems: [...state.cartItems],
          ...sumItems(state.cartItems),
          
        };
  
      // If the action type is DECREASE, we want to decrease the quantity of the particular item in the cartItems array
      case DECREASE:
        state.cartItems[
          state.cartItems.findIndex((item) => item.id === action.payload.id)
        ].quantity--;
        return {
          ...state,
          cartItems: [...state.cartItems],
          ...sumItems(state.cartItems),
          
        };
  
      // If the action type is CHECKOUT, we want to clear the cartItems array and set the checkout to true
      case CHECKOUT:
        return {
          cartItems: [],
          checkout: true,
          ...sumItems([]),
        };
  
      //If the action type is CLEAR, we want to clear the cartItems array
      case CLEAR:
        return {
          cartItems: [],
          ...sumItems([]),
        };
  
      //Return the state if the action type is not found
      default:
        return state;
    }
  };
  
  export default CartReducer;
  