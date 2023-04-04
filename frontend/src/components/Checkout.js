// import styled from "styled-components";
import { formatCurrency } from "../price";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import { loadStripe } from "@stripe/stripe-js";
// import getStripe from '../library/GetStripe';

const Checkout = () => {
  const { clearCart, itemCount, total } =
    useContext(CartContext);
    const handleCheckout = async() => {
    // const stripe = await getStripe();

    const stripe = await loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`) 
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: `${process.env.React_APP_STRIPE_PUBLISHABLE_PRICE_ID}`,
          quantity: 1,
        },
        
      ],
      mode: 'payment',
      successUrl: `http://localhost:3000/success`,
      cancelUrl: `http://localhost:3000/cancel`,
    });
    console.warn(error.message);
  }

// const Checkout = async () => {
//   await fetch('http://localhost:4000/checkout', {
//     method: "POST",
//     header: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({products: cart.products })
//   }).then((response) => {
//     return response.json();
//   }).then((response) => {
//     if(response.url) {
//       window.location.assign(response.url);
//     }
//   })
// }
  return (
    <div className="card-body">
      <h2>Total Items:</h2>
      <h2>{itemCount}</h2>
      <h1>Total Payment:</h1>
      <h2>{formatCurrency(total)}</h2>
      <hr />
      <div>
        <button className='button-85' onClick={handleCheckout}>CHECKOUT</button>
        <button className='button-85' onClick={clearCart}>CLEAR</button>
      </div>
    </div>
  );
};

// Styled Components

// const Wrapper = styled.div`
//   margin-top: 3rem;
//   border: 1px solid #000;
//   padding: 1.5rem;
//   p,
//   h4 {
//     margin: 1rem;
//     font-size: large;
//   }
// `;

// const CheckBtn = styled.button`
//   color: #fff;
//   background-color: green;
//   border: 1px solid #1a1a1a;
//   padding: 0.5rem 1rem;
//   line-height: 1.5;
//   font-size: 10px;
//   border-radius: 0;
//   text-transform: uppercase;
//   cursor: pointer;
//   outline: none;
// `;

// const ClearBtn = styled(CheckBtn)`
//   background: transparent;
//   color: #000;
//   &:hover {
//     background-color: red;
//     color: #fff;
//   }
// `;
export default Checkout;