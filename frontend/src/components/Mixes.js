import React from 'react'

export default function Mixes(props) {
    const { mixes } = props;
  return (
    <div key={mixes.id}className="card">
 <a href={`/mixesbags/${mixes.id}`}>
        <img className="medium"src={mixes.image} alt="popcorn bags"/>
    </a>
    <div className="card-body">
        <a href={`/mixesbags/${mixes.id}`}>
            <h2>{mixes.name}</h2>
        </a>
        
      <div className="detail">{mixes.sizes}<br/> ${mixes.price}</div>
    </div>
    </div>
  )
}

