import React, { useState } from 'react';
import styled from 'styled-components';
import RightHeader from './RightHeader';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: static;
  top: 15px;
  right: 20px;
  z-index: 999;
  display: none;
  
  @media (max-width: 863px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#f3b61f' : '#f3fb61'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Hamburger = () => {
  const [open, setOpen] = useState(false)
 
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightHeader open={open}/>
    </>
  )
}

export default Hamburger
