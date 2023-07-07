import React from "react";
import { products } from "../data/products";
import { Link, useParams } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Detail = () => {
  const { container, product } = useParams();

  const { addToCart, increase, cartItems } = useContext(CartContext);

  const Bag = products.find((item) => {
    if (
      item?.containers[container.toLowerCase()] !== undefined &&
      item.product === product
    )
      return item;
  });

  const [bagItem, setBagItem] = useState({
    id: cartItems.length + 1,
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
    price:
      Bag.containers[container].small ||
      Bag.containers[container].sport ||
      Bag.containers[container][container],
  });

  const [selected, setSelected] = useState({});

  useEffect(() => {
    console.log(bagItem);
  }, [bagItem]);

  console.log("CAPITAL B BAG IN DETAIL", Bag);

  if (!Bag) {
    return <div> Product Not Found</div>;
  }
  const isInCart = (Bag) => {
    return !!cartItems.find((item) => item.name === bagItem.name);
  };

  const handleChange = (e) => {
    setSelected(e.target.value);

    setBagItem({
      id: cartItems.length + 1,
      image: Bag.image,
      name: ` ${Bag.name} ${e.target.value} ${Bag.containers[container].type}`,
      container,
      quantity: 1,
      price: Bag.containers[container][e.target.value],
    });
  };

  const Dropdown = () => {
    switch (container) {
      case "gng":
        return <span>$ {Bag.containers.gng.gng.toFixed(2)}</span>;
      case "bucket":
        return <span>$ {Bag.containers.bucket.bucket.toFixed(2)}</span>;

      case "bags":
        return (
          <select
            name="sizeSelect"
            id="sizeSelect"
            onChange={(e) => handleChange(e)}
            value={selected}
          >
            <option key={1} value="small">
              Small - ${Bag.containers.bags.small.toFixed(2)}
            </option>
            <option key={2} value="med">
              Medium - ${Bag.containers.bags.med.toFixed(2)}
            </option>
            <option key={3} value="lg">
              Large - ${Bag.containers.bags.lg.toFixed(2)}
            </option>
            <option key={4} value="xl">
              X-Large - ${Bag.containers.bags.xl.toFixed(2)}
            </option>
          </select>
        );
      case "mixes":
        return (
          <select value={selected} onChange={(e) => handleChange(e)}>
            <option value="small">
              Small - ${Bag.containers.mixes.small.toFixed(2)}
            </option>
            <option value="med">
              Medium - ${Bag.containers.mixes.med.toFixed(2)}
            </option>
            <option value="lg">
              Large - ${Bag.containers.mixes.lg.toFixed(2)}
            </option>
            <option value="xl">
              X-Large - ${Bag.containers.mixes.xl.toFixed(2)}
            </option>
          </select>
        );
      case "tins":
        return (
          <select value={selected} onChange={(e) => handleChange(e)}>
            <option value="sport">
              Sport Tin - ${Bag.containers.tins.sport.toFixed(2)}
            </option>
            <option value="oneGallon">
              One Gallon- ${Bag.containers.tins.oneGallon.toFixed(2)}
            </option>
            <option value="twoGallon">
              Two Gallon - ${Bag.containers.tins.twoGallon.toFixed(2)}
            </option>
            <option value="threeGallon">
              Three Gallon - ${Bag.containers.tins.threeGallon.toFixed(2)}
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
                  ${Bag.containers.bags.small} - ${Bag.containers.bags.xl}
                </span>
              )}
              {container === "bucket" && (
                <span>$ {Bag.containers.bucket.bucket}</span>
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
