import React from 'react'
import { Link } from 'react-router-dom'
import shop from '../../assets/shop.mp4'
import fund from '../../assets/ff.mp4'
// import ContactScreen from '../../screens/ContactScreen'
export default function SixthBanner() {
  return (
     <div className='done'><Link to={'/offeringscreen'} onClick={() => {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }}>
     <video autoPlay loop muted className='shop'>
     <source src={shop} type='video/mp4'/>
    </video> </Link> 
    <Link to={'/contactscreen'} onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }}> <video autoPlay loop muted className='shop'>
     <source src={fund} type='video/mp4'/>
    </video></Link>
    </div>
  )
}
