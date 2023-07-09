// import styled from "styled-components";
import { formatCurrency } from "../price";
import { useContext, useState, useEffect } from "react";
import CartContext from "../Context/Cart/CartContext";
import StripeCheckout from "./stripe-checkout";

const Checkout = () => {
  const { itemCount, total } = useContext(CartContext);
  const [stripeServiceFee, setStripeServiceFee] = useState(0);

  useEffect(() => {
    setStripeServiceFee((total + 0.3) / (1 - 0.029) - total);
  }, [total]);

  return (
    <div className="card-body">
      <h2>Items Count:</h2>
      <h2>{itemCount}</h2>
      <h2>Items Total:</h2>
      <h2>{total}</h2>
      <h2>Stripe Service Fee:</h2>
      <h2>{stripeServiceFee.toFixed(2)}</h2>
      <h1>Total Payment:</h1>
      <h2>{formatCurrency(total + stripeServiceFee)}</h2>
      <hr />
      <StripeCheckout />
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
