// import styled from "styled-components";
import { formatCurrency } from "../price";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import StripeCheckout from './stripe-checkout';

const Checkout = () => {
  const { itemCount, total } =
    useContext(CartContext);

  return (
    <div className="card-body">
      <h2>Total Items:</h2>
      <h2>{itemCount}</h2>
      <h1>Total Payment:</h1>
      <h2>{formatCurrency(total)}</h2>
      <hr />
      <StripeCheckout/>
     
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