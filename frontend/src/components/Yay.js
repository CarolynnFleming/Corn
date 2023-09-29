import React from 'react'
import { Link } from "react-router-dom";
import { useContext, useEffect } from 'react';
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";

const Yay = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    useEffect(() => {
        if (cartItems.length !==0) { clearCart() }
      }, [clearCart, cartItems]);
  return (
    <div>
        
        <CheckoutMsg>
           <h1>Thank you for your Purchase</h1>
        <p>We are currently processing your order and 
          will send you a confirmation email shortly
        </p>
          <Link to="/">
            <ShopBtn onClick={clearCart}>Continue Shopping</ShopBtn>
          </Link>
        </CheckoutMsg>

    </div>
  )
}
export default Yay;

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