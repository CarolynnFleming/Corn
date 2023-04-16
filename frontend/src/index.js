import React from 'react';
// import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CartState from './Context/Cart/CartState';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
  <React.StrictMode> 
    {/* <Provider store={store}> */}
    <CartState>
      <Elements stripe={stripePromise}>
    <App />
    </Elements>
    </CartState>
    {/* </Provider> */}
  </React.StrictMode> 
  // </Provider>
);


