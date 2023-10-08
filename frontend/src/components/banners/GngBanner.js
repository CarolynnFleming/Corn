import React from 'react'
import { Link } from 'react-router-dom'
import grab from '../../assets/Grab.mp4'
export default function GngBanner() {
  return (
    <div className='gng' >
       <Link to='/offeringscreen' onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }}>
       <video autoPlay loop muted playsInline className='video'>
        <source src={grab} type='video/mp4'/>
       </video>
       </Link>
    </div>
  )
}
