import React, { useContext } from 'react'
// import { Link} from 'react-router-dom'
import styled from "styled-components";
import CartContext from '../Context/Cart/CartContext'
import TrashIcon from'../assets/trash.png'
import Plus from '../assets/plus.png'
import Minus from '../assets/minus.png'
import { formatCurrency } from "../price";

export default function CartItem({product}) {
 
  // const {removeFromCart, increase, decrease } = useContext(CartContext)

  // return (
    
  //   <ul>
  //       <div className='row'>
  //         <div>
          
  //           <img
  //           src={item.image}
  //           alt={item.name}
  //           className='small'/>
  //         </div>
  //         <h1 className='min-30'>
  //           <Link to={`/items/${item.id}`}>{item.name}</Link>
  //         </h1>
         
  //       </div>
  //       <div>
  //         <button onClick={() => increase(item)}><img src={Plus} alt="plus"/></button>
        
  //       <div><h2>Qty: { item.quantity }</h2></div>
  //       {item.quantity > 1 && (
  //         <button onClick={() => decrease(item)}><img src={Minus} alt="minus"/></button>
  //       )}

  //       {item.quantity === 1 && (
  //         <button onClick={() => removeFromCart(item)}><img src={TrachIcon} alt="trash"/></button>
  //       )}
  //       </div>
  //       <h1>${item.price}</h1>
  // </ul>

  // )
  const { removeFromCart, increase, decrease } = useContext(CartContext);

  return (
    <SingleCartItem>
      <CartImage src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <h1>{formatCurrency(product.price)}</h1>
      </div>

      {/* Buttons */}
      <BtnContainer>
        <button
          onClick={() => increase(product)}
          className="btn btn-primary btn-sm mr-2 mb-1"
        >
          <Icon src={Plus} alt="" />
        </button>

        <div>
          <h1>Qty: {product.quantity}</h1>
        </div>

        {product.quantity > 1 && (
          <button onClick={() => decrease(product)} className="btn">
            <Icon src={Minus} alt="" />
          </button>
        )}

        {product.quantity === 1 && (
          <button onClick={() => removeFromCart(product)} className="btn">
            <Icon src={TrashIcon} alt=" trash" />
          </button>
        )}
      </BtnContainer>
    </SingleCartItem>
  );
};

//Styled Components

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

