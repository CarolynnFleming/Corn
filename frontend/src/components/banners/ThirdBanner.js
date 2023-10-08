import React from 'react'
import popslide from '../../assets/Popslide.mp4'
export default function ThirdBanner() {
  return (
    
    <div className='gng'>
        <video autoPlay loop muted className='video'>
     <source src={popslide} type='video/mp4'/>
    </video>
       
        </div>
     

  )
}
