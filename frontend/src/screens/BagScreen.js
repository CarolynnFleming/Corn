import React from "react";
import { products } from "../data/products";
import { Link, useParams } from "react-router-dom";
export default function BagScreen() {
  const { container } = useParams();

  const bag = products.filter((item) => {
    if (item?.containers[container.toLowerCase()] !== undefined) return item;
  });
  return (
    <div>
    <Link className="back" to='/offeringscreen'>
        Back
      </Link>
    <div className="row center grid-container">
      
    
      {bag.map((bags) => (
        <div key={bags.product} className="card">
          <Link to={`/${container}/${bags.product}`}>
            <img className="flowers" src={bags.image} alt="popcorn bags" />
          </Link>
          <div className="card-body">
            <Link to={`/${container}/${bags.product}`}>
              <h2>{bags.name}<br/>{bags.extra}</h2>
            </Link>
            {/* <span>
                  ${bags.containers.bags.small.price.toFixed(2)} - $
                  {bags.containers.bags.xl.price.toFixed(2)}
                </span> */}

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
              {container === "italianice" && (
                <span>
                  ${bags.containers.italianice.small.price.toFixed(2)} - $
                  {bags.containers.italianice.xl.price.toFixed(2)}

                </span>
              )}
                {container === "mixes" && (
                <span>
                  ${bags.containers.mixes.small.price.toFixed(2)} - $
                  {bags.containers.mixes.xl.price.toFixed(2)}

                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
