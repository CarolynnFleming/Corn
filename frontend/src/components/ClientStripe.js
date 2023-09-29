

// import { useState } from "react";

import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = async () => {
  if (!stripePromise) {
    stripePromise = await loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);
  }
  console.log("RESPONSE OBJECT FROM STRIPE INSTANCE", stripePromise);
  return stripePromise;
};

const CheckoutWithStripe = (lineItems, email) => {
  console.log("LINE ITEMS IN CHECKOUT WITH STRIPE", lineItems);
  //   const [stripeError, setStripeError] = useState(null);
  //   const [isLoading, setLoading] = useState(false);

  const checkoutOptions = {
    lineItems,
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
    shippingAddressCollection: { allowedCountries: ["GB", "US"] },
    customerEmail: email,
  }

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



