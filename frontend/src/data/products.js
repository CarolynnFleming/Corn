export const products = [
  {
    name: "cheese",
    product: "cheese",
    image: "/public/Cheddar-popcorn.jpg",
    countInStock: 1,
    containers: {
      bags: {
        type: "Bag",
        small: { price: 6.25, id: "kghdtkjghvkjyfctrj" },
        med: { price: 8.25, id: "kghdt" },
        lg: { price: 10.5, id: "kghdt" },
        xl: { price: 13, id: "kghdt" },
      },
      tins: {
        type: "Tin",
        sport: { price: 28.75, id: "kghdt" },
        oneGallon: { price: 26.75, id: "kghdt" },
        twoGallon: { price: 38.5, id: "kghdt" },
        threeGallon: { price: 52.25, id: "kghdt" },
      },

      gng: {
        type: "Grab & Go",
        gng: { price: 4.5, id: "kghdt" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 19, id: "kghdt" },
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
        small: { price: 6.75, id: "kghdt" },
        med: { price: 9.5, id: "kghdt" },
        lg: { price: 14.5, id: "kghdt" },
        xl: { price: 16.75, id: "kghdt" },
      },
      tins: {
        type: "Tin",
        sport: { price: 32.75, id: "kghdt" },
        oneGallon: { price: 30.75, id: "kghdt" },
        twoGallon: { price: 46.5, id: "kghdt" },
        threeGallon: { price: 61.25, id: "kghdt" },
      },
      gng: {
        type: "Grab & Go",
        gng: { price: 5.5, id: "kghdt" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 22.99, id: "kghdt" },
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
        small: { price: 7.25, id: "kghdt" },
        med: { price: 10, id: "kghdt" },
        lg: { price: 14.5, id: "kghdt" },
        xl: { price: 18, id: "kghdt" },
      },
      tins: {
        type: "Tin",
        sport: { price: 35.25, id: "kghdt" },
        oneGallon: { price: 33.75, id: "kghdt" },
        twoGallon: { price: 54.5, id: "kghdt" },
        threeGallon: { price: 70.25, id: "kghdt" },
      },
      gng: {
        type: "Grab & Go",
        gng: { price: 6.05, id: "kghdt" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 25.99, id: "kghdt" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 6.75, id: "kghdt" },
        med: { price: 9, id: "kghdt" },
        lg: { price: 13.25, id: "kghdt" },
        xl: { price: 15.75, id: "kghdt" },
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
        sport: { price: 33.25, id: "kghdt" },
        oneGallon: { price: 31.75, id: "kghdt" },
        twoGallon: { price: 50.5, id: "kghdt" },
        threeGallon: { price: 65.25, id: "kghdt" },
      },

      gng: {
        type: "Grab & Go",
        gng: { price: 5.75, id: "kghdt" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 23.99, id: "kghdt" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 6.75, id: "kghdt" },
        med: { price: 9, id: "kghdt" },
        lg: { price: 13.25, id: "kghdt" },
        xl: { price: 15.75, id: "kghdt" },
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
        small: { price: 7.75, id: "kghdt" },
        med: { price: 10.5, id: "kghdt" },
        lg: { price: 14.5, id: "kghdt" },
        xl: { price: 18, id: "kghdt" },
      },
      tins: {
        type: "Tin",
        sport: { price: 39.25, id: "kghdt" },
        oneGallon: { price: 37.75, id: "kghdt" },
        twoGallon: { price: 58.5, id: "kghdt" },
        threeGallon: { price: 74.25, id: "kghdt" },
      },

      gng: {
        type: "Grab & Go",
        gng: { price: 6.75, id: "kghdt" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 29.99, id: "kghdt" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 7, id: "kghdt" },
        med: { price: 10, id: "kghdt" },
        lg: { price: 13.5, id: "kghdt" },
        xl: { price: 17, id: "kghdt" },
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
        sport: { price: 37.25, id: "kghdt" },
        oneGallon: { price: 35.75, id: "kghdt" },
        twoGallon: { price: 56.5, id: "kghdt" },
        threeGallon: { price: 72.25, id: "kghdt" },
      },
      gng: {
        type: "Grab & Go",
        gng: { price: 6.5, id: "kghdt" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 26.99, id: "kghdt" },
      },
      mixes: {
        type: "Mixed Bag",
        small: { price: 7, id: "kghdt" },
        med: { price: 10, id: "kghdt" },
        lg: { price: 13.5, id: "kghdt" },
        xl: { price: 17, id: "kghdt" },
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
        sport: { price: 29.75, id: "kghdt" },
        oneGallon: { price: 35.75, id: "kghdt" },
        twoGallon: { price: 42.5, id: "kghdt" },
        threeGallon: { price: 57.75, id: "kghdt" },
      },

      gng: {
        type: "Grab & Go",
        gng: { price: 4.95, id: "kghdt" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 19.99, id: "kghdt" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 6.5, id: "kghdt" },
        med: { price: 8.75, id: "kghdt" },
        lg: { price: 12.5, id: "kghdt" },
        xl: { price: 15, id: "kghdt" },
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
        gng: { price: 7.25, id: "kghdt" },
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
        gng: { price: 7.5, id: "kghdt" },
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
        gng: { price: 7.75, id: "kghdt" },
      },
    },
  },
];
