import React, { useContext, useState } from "react";
// import { useStripe } from "@stripe/react-stripe-js";
import CartContext from "../Context/Cart/CartContext";
// import { fetchFromAPI } from "../helpers";
import CheckoutWithStripe from "./ClientStripe";

const StripeCheckout = (fee) => {
  const [email, setEmail] = useState("");
  const { cartItems, clearCart } = useContext(CartContext);
  // const stripe = useStripe();

  const handleGuestCheckout = async (e) => {
    e.preventDefault();
    const line_items = cartItems.map((item) => {
      // const num =
      //   item.price * 100 + (item.price + 0.3) / (1 - 0.029) - item.price;
      return {
        quantity: item.quantity,
        price: item.id,
      };
    });

    const responseFromStripeCheckout = CheckoutWithStripe(line_items, email);
    console.log(
      "RESPONSE FROM CLIENT SIDE STRIPE CHECKOUT",
      responseFromStripeCheckout
    );
  };

  return (
    <form onSubmit={handleGuestCheckout}>
      <div className="raw">
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
          className="nomad-input"
        />
      </div>
      <div className="submit-btn">
        <button type="submit" className="button-85">
          Checkout
        </button>
        <button className="button-85" onClick={clearCart}>
          CLEAR
        </button>
      </div>
    </form>
  );
};

export default StripeCheckout;
