import React from "react";
import { products } from "../data/products";
import { Link, useParams } from "react-router-dom";
import CartContext from "../Context/Cart/CartContext";
import { useContext } from "react";
import { useState } from "react";

export const Detail = () => {
  const { container, product } = useParams();

  const { addToCart, increase, cartItems } = useContext(CartContext);

  const [bagItem, setBagItem] = useState({});

  const Bag = products.filter((item) => {
    if (
      item?.containers[container.toLowerCase()] !== undefined &&
      item.product === product
    )
      return item;
  });

  console.log("CAPITAL B BAG IN DETAIL", Bag);

  if (!Bag[0]) {
    return <div> Product Not Found</div>;
  }
  const isInCart = (Bag) => {
    // return !!cartItems.find((item) => item.id === Bag[0].id);
    return "this is a fake return";
  };

  const handleChange = (e) => {
    setBagItem({
      id: cartItems.length + 1,
      name: `${e.target.value}`,
    });
  };

  const handleCart = () => {};

  const Dropdown = () => {
    switch (container) {
      case "bucket":
        return (
          <select>
            <option value={Bag[0].containers.bucket.gng}>
              Grab 'N' Go - ${Bag[0].containers.bucket.gng}
            </option>
            <option value={Bag[0].containers.bucket.bucket}>
              Bucket - ${Bag[0].containers.bucket.bucket}
            </option>
          </select>
        );

      case "Bags":
        return (
          <select onChange={(e) => console.log(e.target.value)}>
            <option value={Bag[0].containers.bags.small}>
              Small - ${Bag[0].containers.bags.small}
            </option>
            <option value={Bag[0].containers.bags.med}>
              Medium - ${Bag[0].containers.bags.med}
            </option>
            <option value={Bag[0].containers.bags.lg}>
              Large - ${Bag[0].containers.bags.lg}
            </option>
            <option value={Bag[0].containers.bags.xl}>
              X-Large - ${Bag[0].containers.bags.xl}
            </option>
          </select>
        );
      case "mixes":
        return (
          <select onChange={(e) => console.log(e.target.value)}>
            <option value={Bag[0].containers.mixes.small}>
              Small - ${Bag[0].containers.mixes.small}
            </option>
            <option value={Bag[0].containers.mixes.med}>
              Medium - ${Bag[0].containers.mixes.med}
            </option>
            <option value={Bag[0].containers.mixes.lg}>
              Large - ${Bag[0].containers.mixes.lg}
            </option>
            <option value={Bag[0].containers.mixes.xl}>
              X-Large - ${Bag[0].containers.mixes.xl}
            </option>
          </select>
        );
      case "tins":
        return (
          <select onChange={(e) => console.log(e.target.value)}>
            <option value={Bag[0].containers.tins.sport}>
              Sport Tin - ${Bag[0].containers.tins.sport}
            </option>
            <option value={Bag[0].containers.tins.oneGallon}>
              One Gallon- ${Bag[0].containers.tins.oneGallon}
            </option>
            <option value={Bag[0].containers.tins.twoGallon}>
              Two Gallon - ${Bag[0].containers.tins.twoGallon}
            </option>
            <option value={Bag[0].containers.tins.threeGallon}>
              Three Gallon - ${Bag[0].containers.tins.threeGallon}
            </option>
          </select>
        );

      default:
        break;
    }

    <select>
      <option value="small">Small - ${Bag[0].containers.bags.small}</option>
      <option value="md">Medium - ${Bag[0].containers.bags.med}</option>
      <option value="lg">Large - ${Bag[0].containers.bags.lg}</option>
      <option value="xl">Small - ${Bag[0].containers.bags.xl}</option>
    </select>;
  };

  return (
    <div>
      <Link className="back" to={`/${container}`}>
        {`Back to ${container}`}
      </Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={Bag[0].image} alt={Bag[0].name} />
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{Bag[0].name}</h1>
            </li>
            <li>
              {container === "Bags" && (
                <span>
                  ${Bag[0].containers.bags.small} - ${Bag[0].containers.bags.xl}
                </span>
              )}
              {container === "bucket" && (
                <span>
                  ${Bag[0].containers.bucket.gng} - $
                  {Bag[0].containers.bucket.bucket}
                </span>
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
                    {Bag[0].countInStock > 0 ? (
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
                  onClick={() => addToCart(Bag[0])}
                >
                  {isInCart(Bag[0]) ? "Add More" : "Add To Cart"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
