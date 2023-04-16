import React from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Canceled = () => {
  return (
    <div>
         <CheckoutMsg>
         <h1>Payment failed</h1>
        <p>Payment was not successful</p>
          <Link to="/">
            <ShopBtn>Continue Shopping</ShopBtn>
          </Link>
        </CheckoutMsg>
    </div>
  )
}

export default Canceled;
const CheckoutMsg = styled.div`
  color: green;
  text-align: center;
  padding: 1.5rem;
  p {
    margin: 0.5rem 0 1.5rem 0;
  }
`;

const ShopBtn = styled.button`
  outline: none;
  border: 1px solid green;
  background-color: transparent;
  padding: 0.75rem;
  color: green;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: white;
  }
`;
