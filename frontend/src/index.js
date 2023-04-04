import React from 'react';
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartState from './Context/Cart/CartState';

// import store from './store';
// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
// import offeringsReducer, { offeringsFetch } from './features/offeringsSlice';
// import { offeringsApi } from './features/offeringsApi';
// const store = configureStore({
//   reducer: {
//     offerings: offeringsReducer,
//     [offeringsApi.reducerPath]: offeringsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>  
//     getDefaultMiddleware().concat(offeringsApi.middleware),
  
// });

// store.dispatch(offeringsFetch());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <React.StrictMode> 
    {/* <Provider store={store}> */}
    <CartState>
    <App />
    </CartState>
    {/* </Provider> */}
  </React.StrictMode> 
  // </Provider>
);


