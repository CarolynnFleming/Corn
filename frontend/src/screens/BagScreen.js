import React from "react";
import { products } from "../data/products";
import { Link, useParams } from "react-router-dom";
export default function BagScreen() {
  const { container } = useParams();

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
                  ${bags.containers.bags.small.toFixed(2)} - $
                  {bags.containers.bags.xl.toFixed(2)}
                </span>
              )}
              {container === "bucket" && (
                <span>$ {bags.containers.bucket.bucket.toFixed(2)}</span>
              )}
              {container === "gng" && (
                <span>$ {bags.containers.gng.gng.toFixed(2)}</span>
              )}
              {container === "tins" && (
                <span>
                  ${bags.containers.tins.sport.toFixed(2)} - $
                  {bags.containers.tins.threeGallon.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
