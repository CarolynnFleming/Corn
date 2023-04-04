import React from 'react'

export default function Oneg(props) {
    const { oneg } = props;
    return (
      <div key={oneg.id}className="card">
   <a href={`/oneg/${oneg.id}`}>
          <img className="medium"src={oneg.image} alt="popcorn onegs"/>
      </a>
      <div className="card-body">
          <a href={`/oneg/${oneg.id}`}>
              <h2>{oneg.name}</h2>
          </a>
          
        <div className="detail">{oneg.sizes}<br/> ${oneg.price}</div>
      </div>
      </div>
    )
}
