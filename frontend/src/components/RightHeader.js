import React from "react";
import { Link } from "react-router-dom";

import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";

const RightHeader = ({ open }) => {
  const { cartItems } = useContext(CartContext);

  const cartCount = () => {
    const count = cartItems.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    return count;
  };

  return (
    <Ul open={open}>
      <li>
        <Link className="rainbow-4" to="/offeringscreen">
          Flavors
        </Link>
      </li>

      <li>
        <Link className="rainbow-4" to="/cartscreen">
          🍿
          {cartItems.length > 0 && <span className="badge">{cartCount()}</span>}
        </Link>
      </li>
      <li>
        <Link className="rainbow-4" to="/contactscreen">
          Contact
        </Link>
      </li>
    </Ul>
  );
};

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 99;

  li {
    padding: 18px 10px;
  }
  @media (max-width: 863px) {
    flex-flow: column nowrap;
    background-color: #510d0a;
    opacity: .8;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 45vh;
    width: 20rem;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #bbd8b3;
      padding: 18px 10px;
    }
  }
`;

export default RightHeader;
