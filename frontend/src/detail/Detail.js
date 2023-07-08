import React from "react";
import { products } from "../data/products";
import { Link, useParams } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Detail = () => {
  const { container, product } = useParams();

  console.log("CONTAINER", container);

  const { addToCart, increase, cartItems } = useContext(CartContext);

  const Bag = products.find((item) => {
    if (
      item?.containers[container.toLowerCase()] !== undefined &&
      item.product === product
    )
      return item;
  });

  const createId = () => {
    switch (container.toLowerCase()) {
      case "bucket" || "grab & go":
        return Bag.containers[container][container].id;
      case "tins":
        return Bag.containers[container].sport.id;
      default:
        return Bag.containers[container].small.id;
    }
  };

  const createPrice = () => {
    switch (container.toLowerCase()) {
      case "bucket" || "grab & go":
        return Bag.containers[container][container].price;
      case "tins":
        return Bag.containers[container].sport.price;
      default:
        return Bag.containers[container].small.price;
    }
  };

  console.log(
    "BBAG (ITEM) IN DETAIL",
    Bag,
    "CONTAINERS",
    Bag.containers[container][container]
  );

  const [bagItem, setBagItem] = useState({
    id: createId(),
    image: Bag.image,
    name: ` ${Bag.name} ${
      container === "Bucket" || "Grab & Go"
        ? ""
        : container === "tins"
        ? "sports"
        : "small"
    } ${Bag.containers[container].type}`,
    container,
    quantity: 1,
    price: createPrice(),
  });

  const [selected, setSelected] = useState({});

  useEffect(() => {
    console.log(bagItem);
  }, [bagItem]);

  if (!Bag) {
    return <div> Product Not Found</div>;
  }
  const isInCart = (Bag) => {
    return !!cartItems.find((item) => item.name === bagItem.name);
  };

  const handleChange = (e) => {
    setSelected(e.target.value);

    setBagItem({
      id: Bag.containers[container][e.target.value].id,
      image: Bag.image,
      name: ` ${Bag.name} ${e.target.value} ${Bag.containers[container].type}`,
      container,
      quantity: 1,
      price: Bag.containers[container][e.target.value].price,
    });
  };

  const Dropdown = () => {
    switch (container) {
      case "gng":
        return <span>$ {Bag.containers.gng.gng.price.toFixed(2)}</span>;
      case "bucket":
        return <span>$ {Bag.containers.bucket.bucket.price.toFixed(2)}</span>;

      case "bags":
        return (
          <select
            name="sizeSelect"
            id="sizeSelect"
            onChange={(e) => handleChange(e)}
            value={selected}
          >
            <option key={1} value="small">
              Small - ${Bag.containers.bags.small.price.toFixed(2)}
            </option>
            <option key={2} value="med">
              Medium - ${Bag.containers.bags.med.price.toFixed(2)}
            </option>
            <option key={3} value="lg">
              Large - ${Bag.containers.bags.lg.price.toFixed(2)}
            </option>
            <option key={4} value="xl">
              X-Large - ${Bag.containers.bags.xl.price.toFixed(2)}
            </option>
          </select>
        );
      case "mixes":
        return (
          <select value={selected} onChange={(e) => handleChange(e)}>
            <option value="small">
              Small - ${Bag.containers.mixes.small.price.toFixed(2)}
            </option>
            <option value="med">
              Medium - ${Bag.containers.mixes.med.price.toFixed(2)}
            </option>
            <option value="lg">
              Large - ${Bag.containers.mixes.lg.price.toFixed(2)}
            </option>
            <option value="xl">
              X-Large - ${Bag.containers.mixes.xl.price.toFixed(2)}
            </option>
          </select>
        );
      case "tins":
        return (
          <select value={selected} onChange={(e) => handleChange(e)}>
            <option value="sport">
              Sport Tin - ${Bag.containers.tins.sport.price.toFixed(2)}
            </option>
            <option value="oneGallon">
              One Gallon- ${Bag.containers.tins.oneGallon.price.toFixed(2)}
            </option>
            <option value="twoGallon">
              Two Gallon - ${Bag.containers.tins.twoGallon.price.toFixed(2)}
            </option>
            <option value="threeGallon">
              Three Gallon - ${Bag.containers.tins.threeGallon.price.toFixed(2)}
            </option>
          </select>
        );

      default:
        break;
    }
  };

  return (
    <div>
      <Link className="back" to={`/${container}`}>
        {`Back to ${container}`}
      </Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={Bag.image} alt={Bag.name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{Bag.name}</h1>
            </li>
            <li>
              {container === "Bags" && (
                <span>
                  ${Bag.containers.bags.small.price.toFixed(2)} - $
                  {Bag.containers.bags.xl.price.toFixed(2)}
                </span>
              )}
              {container === "bucket" && (
                <span>$ {Bag.containers.bucket.bucket.price.toFixed(2)}</span>
              )}
            </li>
          </ul>
        </div>
        <div className="col-1">
          <div className="card card-body">
            <ul>
              <li>
                <div className="row">
                  <div>Price</div>
                  <div className="price">
                    <Dropdown />
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div>Status</div>
                  <div>
                    {Bag.countInStock > 0 ? (
                      <span className="success">In Stock</span>
                    ) : (
                      <span className="error">Unavailable</span>
                    )}
                  </div>
                </div>
              </li>
              <li>
                <button
                  className="button-85 block"
                  onClick={() =>
                    isInCart(Bag) ? increase(bagItem) : addToCart(bagItem)
                  }
                >
                  {isInCart(Bag) ? "Add More" : "Add To Cart"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
