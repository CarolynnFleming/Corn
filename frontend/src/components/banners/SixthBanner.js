import React from 'react'
import { Link } from 'react-router-dom'
// import ContactScreen from '../../screens/ContactScreen'
export default function SixthBanner() {
  return (
     <div className='done row center'><Link to={'/ContactScreen'}><button className='button-85'><span className='ugh'>Fundraising Available <br/>Please Click to Contact</span></button> </Link> <br/><br/>
    <Link to={'/offeringscreen'}><button className='button-85'><span className='ugh'> Look Around Our Website <br/>Shop Now!</span></button></Link></div>
  )
}
