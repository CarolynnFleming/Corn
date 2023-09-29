export const products = [
  {
    name: "Cheese",
    product: "cheese",
    image: "/public/Cheese.jpeg",
    countInStock: 1,
    containers: {
      bags: {
        type: "Bag",
        small: { price: 6.25, id: "price_1NRj4pK4xNPEK2uzbpUWDLvr" },
        med: { price: 8.25, id: "price_1NRj6iK4xNPEK2uzRYuh07n5" },
        lg: { price: 10.5, id: "price_1NRj8YK4xNPEK2uzW2wn6ZTM" },
        xl: { price: 13, id: "price_1NRj9lK4xNPEK2uzAYCENp9k" },
      },
      tins: {
        type: "Tin",
        sport: { price: 28.75, id: "price_1NRjFDK4xNPEK2uzVqksbyJy" },
        oneGallon: { price: 26.75, id: "price_1NRjGhK4xNPEK2uzK8xQqhAv" },
        twoGallon: { price: 38.5, id: "price_1NRjHoK4xNPEK2uzFftqDI2t" },
        threeGallon: { price: 52.25, id: "price_1NRjJOK4xNPEK2uzdcVv8l8W" },
      },

      gng: {
        type: "Grab & Go",
        gng: { price: 4.5, id: "price_1NRoBKK4xNPEK2uzylHPM5KV" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 19, id: "price_1NRjLaK4xNPEK2uzGseVXzlp" },
      },
    },
  },
  {
    name: "Cheesy Caramel",
    extra: "Mix",
    product: "cheesy_caramel_mix",
    image: "/public/CheesyCaramelCheese.jpeg",
    countInStock: 1,
    containers: {
      tins: {
        type: "Tin",
        sport: { price: 33.25, id: "price_1NRk1jK4xNPEK2uzmL49EBB9" },
        oneGallon: { price: 31.75, id: "price_1NRk36K4xNPEK2uzkD0wmLcO" },
        twoGallon: { price: 50.5, id: "price_1NRk52K4xNPEK2uzuTaQuN4z" },
        threeGallon: { price: 65.25, id: "price_1NRk61K4xNPEK2uzk1EM4lCI" },
      },

      gng: {
        type: "Grab & Go",
        gng: { price: 5.75, id: "price_1NRk7UK4xNPEK2uznjKd8g07" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 23.99, id: "price_1NRkA4K4xNPEK2uz1uXEArC7" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 6.75, id: "price_1NRkSOK4xNPEK2uzM95UvYjJ" },
        med: { price: 9, id: "price_1NRkT2K4xNPEK2uzDg2tBC4E" },
        lg: { price: 13.25, id: "price_1NRkUQK4xNPEK2uzh2ncb0QE" },
        xl: { price: 15.75, id: "price_1NRkVMK4xNPEK2uz1vYDmIHN" },
      },
    },
  },
  {
    name: "Caramel",
    product: "caramel",
    image: "/public/Caramel.jpeg",
    countInStock: 1,
    containers: {
      bags: {
        type: "Bag",
        small: { price: 6.75, id: "price_1NRjMcK4xNPEK2uzdZg26in5" },
        med: { price: 9.5, id: "price_1NRjNXK4xNPEK2uzCCAYYGov" },
        lg: { price: 14.5, id: "price_1NRjOfK4xNPEK2uzYw5Q8uIV" },
        xl: { price: 16.75, id: "price_1NRjPYK4xNPEK2uzfoMhGvCn" },
      },
      tins: {
        type: "Tin",
        sport: { price: 32.75, id: "price_1NRjRAK4xNPEK2uzU4p3VLMR" },
        oneGallon: { price: 30.75, id: "price_1NRjSNK4xNPEK2uzk6RjHINs" },
        twoGallon: { price: 46.5, id: "price_1NRjTqK4xNPEK2uzRfaxrj8A" },
        threeGallon: { price: 61.25, id: "price_1NRjVMK4xNPEK2uzi8YkagHs" },
      },
      gng: {
        type: "Grab & Go",
        gng: { price: 5.5, id: "price_1NRjXGK4xNPEK2uziCM0oH1R" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 22.99, id: "price_1NRjXyK4xNPEK2uzPH0RNu0z" },
      },
    },
  },
  {
    name: "Cheesy Caramel",
    product: "cheesy_caramel",
    image: "/public/CheesyCaramel.jpeg",
    countInStock: 1,
    containers: {
      bags: {
        type: "Bag",
        small: { price: 7.25, id: "price_1NRjaRK4xNPEK2uzkk49g1C9" },
        med: { price: 10, id: "price_1NRjciK4xNPEK2uzGX3U9n0s" },
        lg: { price: 14.5, id: "price_1NRjdjK4xNPEK2uzk9CMh2uU" },
        xl: { price: 18, id: "price_1NRjeQK4xNPEK2uzREMTI74J" },
      },
      tins: {
        type: "Tin",
        sport: { price: 35.25, id: "price_1NRjfTK4xNPEK2uzolCxwSiU" },
        oneGallon: { price: 33.75, id: "price_1NRjgMK4xNPEK2uznwe2CEUf" },
        twoGallon: { price: 54.5, id: "price_1NRjj5K4xNPEK2uz7w7vBEBR" },
        threeGallon: { price: 70.25, id: "price_1NRjk0K4xNPEK2uzKPGOP1tf" },
      },
      gng: {
        type: "Grab & Go",
        gng: { price: 6.05, id: "price_1NRjmFK4xNPEK2uzO0rcss4c" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 25.99, id: "price_1NRjmyK4xNPEK2uzC5QtYn4A" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 6.75, id: "price_1NRjoRK4xNPEK2uzd3WHqOh3" },
        med: { price: 9, id: "price_1NRjp9K4xNPEK2uz0ZJtc4Zr" },
        lg: { price: 13.25, id: "price_1NRjpnK4xNPEK2uz63vYXjFi" },
        xl: { price: 15.75, id: "price_1NRjsIK4xNPEK2uztIKhmgKu" },
      },
    },
  },
  
  {
    name: "Nutty Caramel",
    product: "nutty_caramel",
    image: "/public/NuttyCaramel.jpeg",
    countInStock: 1,
    containers: {
      bags: {
        type: "Bag",
        small: { price: 7.75, id: "price_1NRkedK4xNPEK2uzpBsayF6L" },
        med: { price: 10.5, id: "price_1NRkfqK4xNPEK2uzPhElvhvN" },
        lg: { price: 14.5, id: "price_1NRkgRK4xNPEK2uzFQZge3aW" },
        xl: { price: 18, id: "price_1NRkhJK4xNPEK2uzFYbYVJEc" },
      },
      tins: {
        type: "Tin",
        sport: { price: 39.25, id: "price_1NRkiEK4xNPEK2uzT47al2Sy" },
        oneGallon: { price: 37.75, id: "price_1NRkrGK4xNPEK2uzl23TzVCr" },
        twoGallon: { price: 58.5, id: "price_1NRksPK4xNPEK2uzvMGkK7Ya" },
        threeGallon: { price: 74.25, id: "price_1NRkt2K4xNPEK2uzdhfgKs3l" },
      },

      gng: {
        type: "Grab & Go",
        gng: { price: 6.75, id: "price_1NRktoK4xNPEK2uzfE8czaES" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 29.99, id: "price_1NRkudK4xNPEK2uzdIw7L9Du" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 7, id: "price_1NRm9uK4xNPEK2uzBAHKnVEQ" },
        med: { price: 10, id: "price_1NRmCyK4xNPEK2uzFGNh7nYd," },
        lg: { price: 13.5, id: "price_1NRmE3K4xNPEK2uz2yEguDBy" },
        xl: { price: 17, id: "price_1NRmFIK4xNPEK2uzqF4nK8Ur" },
      },
    },
  },
  {
    name: "Nutty Caramel",
    extra: "Mix",
    product: "nutty_caramel_mix",
    image: "/public/NuttyCaramelCheese.jpeg",
    countInStock: 1,
    containers: {
      tins: {
        type: "Tin",
        sport: { price: 37.25, id: "price_1NRky4K4xNPEK2uzaCXjk1qk" },
        oneGallon: { price: 35.75, id: "price_1NRkzDK4xNPEK2uzTpjUNGfz" },
        twoGallon: { price: 56.5, id: "price_1NRl05K4xNPEK2uzBd2M8B6E" },
        threeGallon: { price: 72.25, id: "price_1NRl1EK4xNPEK2uzQtKqq67O" },
      },
      gng: {
        type: "Grab & Go",
        gng: { price: 6.5, id: "price_1NRl2OK4xNPEK2uz7JVoxhd2" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 26.99, id: "price_1NRl3SK4xNPEK2uziDgLYEia" },
      },
      mixes: {
        type: "Mixed Bag",
        small: { price: 7, id: "price_1NRl4SK4xNPEK2uzCJ2sj8cW" },
        med: { price: 10, id: "price_1NRl5HK4xNPEK2uz0wgcmpbY" },
        lg: { price: 13.5, id: "price_1NRl6jK4xNPEK2uzAik1cTab" },
        xl: { price: 17, id: "price_1NRl81K4xNPEK2uzUrxge4cS" },
      },
    },
  },
  {
    name: "Poppin Mix",
    product: "poppin_mix",
    image: "/public/PoppinMix.jpeg",
    countInStock: 1,
    containers: {
      tins: {
        type: "Tin",
        sport: { price: 29.75, id: "price_1NRlAIK4xNPEK2uz2qkZpWk0" },
        oneGallon: { price: 35.75, id: "price_1NRlB1K4xNPEK2uzF611L9RZ" },
        twoGallon: { price: 42.5, id: "price_1NRlBiK4xNPEK2uzZt45CwPI" },
        threeGallon: { price: 57.75, id: "price_1NRlCTK4xNPEK2uz4Yl6PGth" },
      },

      gng: {
        type: "Grab & Go",
        gng: { price: 4.95, id: "price_1NRlDXK4xNPEK2uzfkZBqdva" },
      },
      bucket: {
        type: "Bucket",
        bucket: { price: 19.99, id: "price_1NRlE7K4xNPEK2uzl85S84VI" },
      },

      mixes: {
        type: "Mixed Bag",
        small: { price: 6.5, id: "price_1NRlExK4xNPEK2uzBBwO1Yi0" },
        med: { price: 8.75, id: "price_1NRlFVK4xNPEK2uzbcnxxViR" },
        lg: { price: 12.5, id: "price_1NRlGWK4xNPEK2uzM96PbkaR" },
        xl: { price: 15, id: "price_1NRlHWK4xNPEK2uzVj8VDSwa" },
      },
    },
  },
  {
    name: "Black Walnut",
    product: "blck_walnut",
    image: "/public/Mix.jpg",
    countInStock: 1,
    containers: {
      gng: {
        type: "Grab & Go",
        gng: { price: 7.25, id: "price_1NRlIoK4xNPEK2uzKCGeePIp" },
      },
    },
  },
  {
    name: "Caramel Pecan",
    product: "caramel_pecan",
    image: "/public/CaramelPecan.jpeg",
    countInStock: 1,
    containers: {
      gng: {
        type: "Grab & Go",
        gng: { price: 7.5, id: "price_1NRlJYK4xNPEK2uzPlaohso5" },
      },
    },
  },
  {
    name: "Caramel Cashew",
    product: "caramel_cashew",
    image: "/public/caramel.jpeg",
    countInStock: 1,
    containers: {
      gng: {
        type: "Grab & Go",
        gng: { price: 7.75, id: "price_1NRlKQK4xNPEK2uz8MD9z5Hw" },
      },
    },
  },
  {
    name:'Spicy Buffalo',
    product: 'cheesy_vinegar',
    image:'/public/SpicyBuffalo.jpeg',
    countInStock: 1,
    containers:{
      gng: {
        type: " Grab & Go",
        gng: { price: 4.50, id: ''},
      },
    },

  },
  {
    name:'Caramel Apple',
    product: 'caramel_apple',
    image:'/public/CaramelApple.jpeg',
    countInStock: 1,
    containers:{
      gng: {
        type: " Grab & Go",
        gng: { price: 5.50, id: ''},
      },
    },

  },
  {
    name:'Dill',
    product: 'cheesy_dill',
    image:'/public/Dill.jpeg',
    countInStock: 1,
    containers:{
      gng: {
        type: " Grab & Go",
        gng: { price: 4.50, id: ''},
      },
    },

  },
  {
    name: 'Lemon',
  product: 'lemon',
image: '/public/lemon.jpeg',
countInStock: 1,
containers: {
  italianice: {
    type: 'Italian Ice',
    small: { price: 2.75, id: 'price_1NRpzSK4xNPEK2uz2i5Z04dG'},
    med: {price: 3.75, id: 'price_1NRq0UK4xNPEK2uz9IpyKrHr'},
    lg: {price: 4.75, id: 'price_1NRq1CK4xNPEK2uzjGL8zAaC'},
    xl: {price: 5.75, id: 'price_1NRq22K4xNPEK2uzbjqAIOns'}
  }
}  
},
{
  name: 'Lime',
product: 'lime',
image: '/public/lime.jpeg',
countInStock: 1,
containers: {
italianice: {
  type: 'Italian Ice',
  small: { price: 2.75, id: 'price_1NRq2eK4xNPEK2uz6c1XMaYO'},
    med: {price: 3.75, id: 'price_1NRq3QK4xNPEK2uz2qA4cznA'},
    lg: {price: 4.75, id: 'price_1NRq3zK4xNPEK2uz1rUWg7bX'},
    xl: {price: 5.75, id: 'price_1NRq4kK4xNPEK2uzMZSDxalZ'}
}
}  
},
{
  name: 'Grape',
product: 'grape',
image: '/public/grape.jpeg',
countInStock: 1,
containers: {
italianice: {
  type: 'Italian Ice',
  small: { price: 2.75, id: 'price_1NRq5kK4xNPEK2uzkvyNLCic'},
  med: {price: 3.75, id: 'price_1NRq6wK4xNPEK2uz7CkVkP8b'},
  lg: {price: 4.75, id: 'price_1NRq7aK4xNPEK2uzpunyKd9E'},
  xl: {price: 5.75, id: 'price_1NRq8HK4xNPEK2uz97e7fSIm'}
}
}  
},
{
  name: 'Mango',
product: 'mango',
image: '/public/mango.jpeg',
countInStock: 1,
containers: {
italianice: {
  type: 'Italian Ice',
  small: { price: 2.75, id: 'price_1NRq9HK4xNPEK2uzlkTlblsj'},
    med: {price: 3.75, id: 'price_1NRqA9K4xNPEK2uzm1MEDh3I'},
    lg: {price: 4.75, id: 'price_1NRqAuK4xNPEK2uz5rp18aXF'},
    xl: {price: 5.75, id: 'price_1NRqBUK4xNPEK2uzHHyqKB7w'}
}
}  
},
{
  name: 'Cherry',
product: 'cherry',
image: '/public/cherry.jpeg',
countInStock: 1,
containers: {
italianice: {
  type: 'Italian Ice',
  small: { price: 2.75, id: 'price_1NRqCDK4xNPEK2uztKsYIJqs'},
    med: {price: 3.75, id: 'price_1NRqCtK4xNPEK2uzl8FbFtX9'},
    lg: {price: 4.75, id: 'price_1NRqDTK4xNPEK2uzjkLCpjrB'},
    xl: {price: 5.75, id: 'price_1NRqE7K4xNPEK2uzFZG4Ee8F'}
}
}  
},
{
  name: 'Orange',
product: 'orange',
image: '/public/orange.jpeg',
countInStock: 1,
containers: {
italianice: {
  type: 'Italian Ice',
  small: { price: 2.75, id: 'price_1NRqEnK4xNPEK2uzSY1tNUIU'},
    med: {price: 3.75, id: 'price_1NRqFOK4xNPEK2uznMULHXKS'},
    lg: {price: 4.75, id: 'price_1NRqGHK4xNPEK2uzCa4W5LOJ'},
    xl: {price: 5.75, id: 'price_1NRqHIK4xNPEK2uzKLr23JeJ'}
}
}  
},
{
  name: 'Strawberry',
product: 'strawberry',
image: '/public/strawberry.jpeg',
countInStock: 1,
containers: {
italianice: {
  type: 'Italian Ice',
  small: { price: 2.75, id: 'price_1NRqIpK4xNPEK2uzdgH0pvXa'},
    med: {price: 3.75, id: 'price_1NRqJeK4xNPEK2uzbQbwnzzT'},
    lg: {price: 4.75, id: 'price_1NRqL1K4xNPEK2uzotqRbZax'},
    xl: {price: 5.75, id: 'price_1NRqM2K4xNPEK2uz4z7AtpfY'}
}
}  
},
{
  name: 'Watermelon',
product: 'watermelon',
image: '/public/watermelon.jpeg',
countInStock: 1,
containers: {
italianice: {
  type: 'Italian Ice',
  small: { price: 2.75, id: 'price_1NS28iK4xNPEK2uzcWszq4oH'},
  med: {price: 3.75, id: 'price_1NS2A8K4xNPEK2uzEQuYd9Cs'},
  lg: {price: 4.75, id: 'price_1NS2AxK4xNPEK2uzQtgfodzc'},
  xl: {price: 5.75, id: 'price_1NS2CWK4xNPEK2uzz88HVeLp'}
}
}  
},
{
  name: 'Blue Rasberry',
product: 'blue_rasberry',
image: '/public/blueras.jpeg',
countInStock: 1,
containers: {
italianice: {
  type: 'Italian Ice',
  small: { price: 2.75, id: 'price_1NS2DPK4xNPEK2uz01qwjzdN'},
  med: {price: 3.75, id: 'price_1NS2FWK4xNPEK2uzR4ZUrXUG'},
  lg: {price: 4.75, id: 'price_1NS2GbK4xNPEK2uzxdGSVONC'},
  xl: {price: 5.75, id: 'price_1NS2HbK4xNPEK2uzI31v33QK'}
}
}  
},
{
  name: 'Kiwi Rasberry',
product: 'kiwi_rasberry',
image: '/public/kiwi.jpeg',
countInStock: 1,
containers: {
italianIce: {
  type: 'Italian Ice',
  small: { price: 2.75, id: 'price_1NS2IiK4xNPEK2uzQF8hgn4m'},
    med: {price: 3.75, id: 'price_1NS2JZK4xNPEK2uzUyuMwB2p'},
    lg: {price: 4.75, id: 'price_1NS2KRK4xNPEK2uzphjypaPA'},
    xl: {price: 5.75, id: 'price_1NS2LhK4xNPEK2uz0USlaFkK'}
}
}  
},
{
  name: 'Berry Rasberry',
product: 'berry_rasberry',
image: '/public/berryras.jpeg',
countInStock: 1,
containers: {
italianIce: {
  type: 'Italian Ice',
  small: { price: 2.75, id: 'price_1NS2MjK4xNPEK2uzle0uW8gz'},
    med: {price: 3.75, id: 'price_1NS2NeK4xNPEK2uzNF3IITu6'},
    lg: {price: 4.75, id: 'price_1NS2OQK4xNPEK2uzrDAYepM4'},
    xl: {price: 5.75, id: 'price_1NS2PHK4xNPEK2uzx5h29hqI'}
}
}  
},
{
  name: 'Sour Apple',
product: 'sour_apple',
image: '/public/sourapp.jpeg',
countInStock: 1,
containers: {
italianIce: {
  small: { price: 2.75, id: 'price_1NS2Q2K4xNPEK2uzmsXfalnu'},
  med: {price: 3.75, id: 'price_1NS2QnK4xNPEK2uzbg2cZb70'},
  lg: {price: 4.75, id: 'price_1NS2RWK4xNPEK2uzfDPDIrI0'},
  xl: {price: 5.75, id: 'price_1NS2SDK4xNPEK2uzIAGYjVWZ'}
}
}  
}
];