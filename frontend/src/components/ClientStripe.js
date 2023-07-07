import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }

  return stripePromise;
};

const CheckoutWithStripe = ({ line_Items }) => {
  //   const [stripeError, setStripeError] = useState(null);
  //   const [isLoading, setLoading] = useState(false);

  const checkoutOptions = {
    lineItems: line_Items,
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const redirectToCheckout = async () => {
    // setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) console.log(error.message);
    // setLoading(false);
    if (error) alert(error.merssage);
  };

  redirectToCheckout();
};

export default CheckoutWithStripe;
