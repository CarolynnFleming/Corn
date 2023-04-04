import React from 'react'

export default function Sportstin(props) {
    const { sportstin } = props;
    return (
      <div key={sportstin.id}className="card">
   <a href={`/sportstin/${sportstin.id}`}>
          <img className="medium"src={sportstin.image} alt="popcorn sportstins"/>
      </a>
      <div className="card-body">
          <a href={`/sportstin/${sportstin.id}`}>
              <h2>{sportstin.name}</h2>
          </a>
          
        <div className="detail">{sportstin.sizes}<br/> ${sportstin.price}</div>
      </div>
      </div>
    )
}
