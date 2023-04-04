import React from 'react'

export default function Bucket(props) {
    const { bucket } = props;
    return (
      <div key={bucket.id}className="card">
   <a href={`/bucket/${bucket.id}`}>
          <img className="medium"src={bucket.image} alt="popcorn buckets"/>
      </a>
      <div className="card-body">
          <a href={`/bucket/${bucket.id}`}>
              <h2>{bucket.name}</h2>
          </a>
          
        <div className="detail">{bucket.sizes}<br/> ${bucket.price}</div>
      </div>
      </div>
    )
}
