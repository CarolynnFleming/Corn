import React, { useContext } from "react";

import styled from "styled-components";
import CartContext from "../Context/Cart/CartContext";
import TrashIcon from "../assets/trash.png";
import Plus from "../assets/plus.png";
import Minus from "../assets/minus.png";
import { formatCurrency } from "../price";

export default function CartItem({ product }) {
  const { removeFromCart, increase, decrease } = useContext(CartContext);

  return (
    <SingleCartItem>
      <CartImage src={product.image} alt={product.name} />
      

      <BtnContainer>
        {product.quantity === 1 && (
          <button onClick={() => removeFromCart(product)} className="btn">
            <Icon src={TrashIcon} alt=" trash" />
          </button>
        )}

        {product.quantity > 1 && (
          <button onClick={() => decrease(product)} className="btn">
            <Icon src={Minus} alt="minus" />
          </button>
        )}
        <div>
          <h1 className="lead">Qty:{product.quantity}</h1>
        </div>

        <button
          onClick={() => increase(product)}
          className="btn btn-primary btn-sm mr-2 mb-1"
        >
          <Icon src={Plus} alt="plus" />
        </button>
      </BtnContainer>
        <div>  <h2>{`${product.name}`}</h2>
        <h1 className="bob">{formatCurrency(product.price)}</h1>
            </div>
    </SingleCartItem>
  );
}

const SingleCartItem = styled.div`
  border-bottom: 1px solid gray;
  padding: 10px 0;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  &:nth-child(1) {
    border-top: 1px solid gray;
  }
`;

const CartImage = styled.img`
  width: 100px;
  height: auto;
  padding-right: 2rem;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled.img`
  width: 1.6rem;
  height: auto;
`;
