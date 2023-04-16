// sk_test_51Mt0idK4xNPEK2uzoATZ1M8BX9f52B7sOKbmr2UKlZYPRSD8e7jyFTc4ZNdu6hrMWSRAYmekRAsCFHX4v1x90Pyh00UYVpnizP
// cheese = price_1Mt1vyK4xNPEK2uzhuikAS83
// poppinMix = price_1Mt21FK4xNPEK2uzVTn3EhFa
// caramel = price_1Mt23bK4xNPEK2uzlP7CbcxX

// const express = require('express');
// var cors = require('cors');
// const stripe = require('stripe')('sk_test_51Mt0idK4xNPEK2uzoATZ1M8BX9f52B7sOKbmr2UKlZYPRSD8e7jyFTc4ZNdu6hrMWSRAYmekRAsCFHX4v1x90Pyh00UYVpnizP')

// const app = express();
// app.use(cors());
// app.use(express.static("public"));
// app.use(express.json());

// app.post("/checkout", async (req, res) => {
//     const products = req.body.products;
//     let lineItems = [];
//     products.forEach((product) => {
//         lineItems.push(
//             {
//                 price:product.id,
//                 quantity: product.quantity
//             }
//         )
//     });
//     const session = await stripe.checkout.sessions.create({
//         line_items: lineItems,
//         mode: 'payment',
//         success_url: "http://localhost:3000/success",
//         cancel_url: "http://loacalhost:3000/cancel"
//     });
//     res.send(JSON.stringify({
//         url: session.url
//     }));
// });

// app.listen(4000, () => console.log("listening on port 4000"))