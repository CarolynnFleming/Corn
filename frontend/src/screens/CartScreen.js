import CartItem from "../components/CartItem";
import { useContext } from "react";
import CartContext from "../Context/Cart/CartContext";
import styled from "styled-components";
import Checkout from "../components/Checkout";
import Des1 from "../components/banners/Des1";
import Des2 from "../components/banners/Des2";


const CartScreen = () => {
  // Extract the cart state from the context
  const { cartItems } = useContext(CartContext);
  console.log("CART ITEMS IN CART SCREEN", cartItems);

  const cartCount = () => {
    const count = cartItems.reduce((acc, curr) => {
      return acc + curr.quantity;
    }, 0);
    return count;
  };

  return (
    <>
    <Des1/>
      <Heading>
        <h1 className="bob">
          Shopping Cart
          <span className="bob">({cartCount()})</span>
        </h1>
      </Heading>

      <Layout>
        <div>
          {
            <CartItemWrapper>
              {/* If cart is empty, display message, and if not, display each cart
            Item in cart: {cartItems.length} */}
              {cartItems.length === 0 ? (
                <h4 style={{}}>Cart is empty</h4>
              ) : (
                <ul>
                  {cartItems.map((product, i) => (
                    <CartItem key={product.name + i} product={product} />
                  ))}
                </ul>
              )}
            </CartItemWrapper>
          }
        </div>

        <div>{cartItems.length > 0 && <Checkout />}</div>
        
      </Layout>
          <Des2/>
    </>
  );
};

//Styled Components
const Heading = styled.div`
  margin-top: 8rem;
  text-align: center;
`;

const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  margin: auto;
  width: 85%;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    &:nth-child(2) {
      margin-top: 3rem;
    }
  }
`;

const CartItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;

export default CartScreen;
