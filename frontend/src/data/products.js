export const products = [
  {
    name: "cheese",
    product: "cheese",
    image: "/public/Cheddar-popcorn.jpg",
    countInStock: 1,
    containers: {
      bags: {
        type: "Bag",
        small: { price: 6.25, id: "kjghvkjyfctrj" },
        med: { price: 8.25, id: "" },
        lg: { price: 10.5, id: "" },
        xl: { price: 13, id: "" },
      },
      tins: {
        type: "Tin",
        sport: { price: 28.75, id: "" },
        oneGallon: { price: 26.75, id: "" },
        twoGallon: { price: 38.5, id: "" },
        threeGallon: { price: 52.25, id: "" },
      },
      
      gng: {
        type: "Grab & Go",
        gng: { price: 4.5, id: "" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 19, id: "" },
      },
    },
  },
  {
    name: "caramel",
    product: "caramel",
    image: "/public/caramel.jpeg",
    countInStock: 1,
    containers: {
      bags: {
        type: "Bag",
        small: { price: 6.75, id: "" },
        med: { price: 9.5, id: "" },
        lg: { price: 14.5, id: "" },
        xl: { price: 16.75, id: "" },
      },
      tins: {
        type: "Tin",
        sport: { price: 32.75, id: "" },
        oneGallon: { price: 30.75, id: "" },
        twoGallon: { price: 46.5, id: "" },
        threeGallon: { price: 61.25, id: "" },
      },
      gng: {
        type: "Grab & Go",
        gng: { price: 5.5, id: "" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 22.99, id: "" },
      },
    },
  },
  {
    name: "cheesy caramel",
    product: "cheesy_caramel",
    image: "/public/Mix.jpg",
    countInStock: 1,
    containers: {
      bags: {
        type: "Bag",
        small: { price: 7.25, id: "" },
        med: { price: 10, id: "" },
        lg: { price: 14.5, id: "" },
        xl: { price: 18, id: "" },
      },
      tins: {
        type: "Tin",
        sport: { price: 35.25, id: "" },
        oneGallon: { price: 33.75, id: "" },
        twoGallon: { price: 54.5, id: "" },
        threeGallon: { price: 70.25, id: "" },
      },
      gng: {
        type: "Grab & Go",
        gng: { price: 6.05, id: "" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 25.99, id: "" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 6.75, id: "" },
        med: { price: 9, id: "" },
        lg: { price: 13.25, id: "" },
        xl: { price: 15.75, id: "" },
      },
    },
  },
  {
    name: "cheesy caramel mix",
    product: "cheesy_caramel_mix",
    image: "/public/Mix.jpg",
    countInStock: 1,
    containers: {
      tins: {
        type: "Tin",
        sport: { price: 33.25, id: "" },
        oneGallon: { price: 31.75, id: "" },
        twoGallon: { price: 50.5, id: "" },
        threeGallon: { price: 65.25, id: "" },
      },

      gng: {
        type: "Grab & Go",
        gng: { price: 5.75, id: "" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 23.99, id: "" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 6.75, id: "" },
        med: { price: 9, id: "" },
        lg: { price: 13.25, id: "" },
        xl: { price: 15.75, id: "" },
      },
    },
  },
  {
    name: "nutty caramel",
    product: "nutty_caramel",
    image: "/public/Sm-bag.jpg",
    countInStock: 1,
    containers: {
      bags: {
        type: "Bag",
        small: { price: 7.75, id: "" },
        med: { price: 10.5, id: "" },
        lg: { price: 14.5, id: "" },
        xl: { price: 18, id: "" },
      },
      tins: {
        type: "Tin",
        sport: { price: 39.25, id: "" },
        oneGallon: { price: 37.75, id: "" },
        twoGallon: { price: 58.5, id: "" },
        threeGallon: { price: 74.25, id: "" },
      },

      gng: {
        type: "Grab & Go",
        gng: { price: 6.75, id: "" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 29.99, id: "" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 7, id: "" },
        med: { price: 10, id: "" },
        lg: { price: 13.5, id: "" },
        xl: { price: 17, id: "" },
      },
    },
  },
  {
    name: "nutty caramel mix",
    product: "nutty_caramel_mix",
    image: "/public/Mix.jpg",
    countInStock: 1,
    containers: {
      tins: {
        type: "Tin",
        sport: { price: 37.25, id: "" },
        oneGallon: { price: 35.75, id: "" },
        twoGallon: { price: 56.5, id: "" },
        threeGallon: { price: 72.25, id: "" },
      },
      gng: {
        type: "Grab & Go",
        gng: { price: 6.5, id: "" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 26.99, id: "" },
      },
      mixes: {
        type: "Mixed Bag",
        small: { price: 7, id: "" },
        med: { price: 10, id: "" },
        lg: { price: 13.5, id: "" },
        xl: { price: 17, id: "" },
      },
    },
  },
  {
    name: "poppin mix",
    product: "poppin_mix",
    image: "/public/Mix.jpg",
    countInStock: 1,
    containers: {
      tins: {
        type: "Tin",
        sport: { price: 29.75, id: "" },
        oneGallon: { price: 35.75, id: "" },
        twoGallon: { price: 42.5, id: "" },
        threeGallon: { price: 57.75, id: "" },
      },

      gng: {
        type: "Grab & Go",
        gng: { price: 4.95, id: "" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 19.99, id: "" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 6.5, id: "" },
        med: { price: 8.75, id: "" },
        lg: { price: 12.5, id: "" },
        xl: { price: 15, id: "" },
      },
    },
  },
  {
    name: "black walnut",
    product: "blck_walnut",
    image: "/public/Mix.jpg",
    countInStock: 1,
    containers: {
      gng: {
        type: "Grab & Go",
        gng: { price: 7.25, id: "" },
      },
    },
  },
  {
    name: "caramel pecan",
    product: "caramel_pecan",
    image: "/public/Sm-bag.jpg",
    countInStock: 1,
    containers: {
      gng: {
        type: "Grab & Go",
        gng: { price: 7.5, id: "" },
      },
    },
  },
  {
    name: "caramel cashew",
    product: "caramel_cashew",
    image: "/public/Sm-bag.jpg",
    countInStock: 1,
    containers: {
      gng: {
        type: "Grab & Go",
        gng: { price: 7.75, id: "" },
      },
    },
  },
];
