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
    <div className="card">
    <div className="card-body">
      <span>Items in Cart:  {itemCount}</span><br/>

  
      <span>Service Fee: { formatCurrency (stripeServiceFee.toFixed(2))}</span><br/>

      <span>Cart Total: ${total.toFixed(2)}</span><br/>
      

      <br/>
      <span>Total Payment: {formatCurrency(total + stripeServiceFee)}</span><br/>
     
      <hr />
      <StripeCheckout />
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
