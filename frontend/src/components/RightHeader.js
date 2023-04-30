import React from 'react'
import { Link } from 'react-router-dom'

import { useContext } from 'react';
import CartContext from '../Context/Cart/CartContext';
import styled from 'styled-components';


const RightHeader = ({ open }) => {

    const { cartItems } = useContext(CartContext);

  return (
    
       <Ul open={open}>
        
       <li ><Link className="rainbow-4" to="/about">About</Link></li>
                  <li><Link className="rainbow-4" to="/offeringscreen">Offerings</Link></li>
                  
                    <li><Link className="rainbow-4" to="/cartscreen">🍿
                    {cartItems.length > 0 && (

                      <span className='badge'>{cartItems.length}</span>
                      )}</Link></li>
                      <li><Link className="rainbow-4" to="/contactscreen">Contact</Link></li>
                      
            
            </Ul>
              
        
  )
}

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 863px) {
    flex-flow: column nowrap;
    background-color: #510d0a;
    opacity:0.8;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 50vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #bbd8b3;
    }
  }`;


export default RightHeader
