import React, { useEffect } from "react";
import { products } from "../data/products";
import { Link, useParams } from "react-router-dom";

export default function BagScreen() {
  const { container } = useParams();

  const fee = (price) => {
    const stripeFee = (price + 0.3) / (1 - 0.029) - price;
    return stripeFee.toFixed(2);
  };

  useEffect(() => {
    const serviceFeeList = products.map((item) => {
      const itemContainers = Object.keys(item.containers);
      const containerSizes = itemContainers.map((container) => {
        const arrayOfSizes = Object.keys(item.containers[container]);
        if (arrayOfSizes[0] === "type") {
          arrayOfSizes.shift();
        }
        const brainFog = arrayOfSizes.map((size) => {
          return {
            name: `${item.name} ${size === container ? "" : size} ${container}`,
            stripe_fee: fee(item.containers[container][size].price),
          };
        });
        return brainFog.flat();
      });
      return containerSizes.flat();
    });
    console.log(serviceFeeList.flat());
  }, []);

  const bag = products.filter((item) => {
    if (item?.containers[container.toLowerCase()] !== undefined) return item;
  });
  return (
    <div className="row center">
      {bag.map((bags) => (
        <div key={bags.product} className="card">
          <Link to={`/${container}/${bags.product}`}>
            <img className="flowers" src={bags.image} alt="popcorn bags" />
          </Link>
          <div className="card-body">
            <Link to={`/${container}/${bags.product}`}>
              <h2>{bags.name}</h2>
            </Link>

            <div className="detail">
              {container === "Bags" && (
                <span>
                  ${bags.containers.bags.small.price.toFixed(2)} - $
                  {bags.containers.bags.xl.price.toFixed(2)}
                </span>
              )}
              {container === "bucket" && (
                <span>$ {bags.containers.bucket.bucket.price.toFixed(2)}</span>
              )}
              {container === "gng" && (
                <span>$ {bags.containers.gng.gng.price.toFixed(2)}</span>
              )}
              {container === "tins" && (
                <span>
                  ${bags.containers.tins.sport.price.toFixed(2)} - $
                  {bags.containers.tins.threeGallon.price.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
