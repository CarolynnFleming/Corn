import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeScreen() {
  return(
    <div className='row center'style={{background: 'url(/iPhone.jpg)', backgroundSize:'cover'}}>
   
        <div className='home-card'>
        
        <img className="home-popcorn"src="./public/popcorn.gif" alt="popcorn"/>
       
        
       <div className='goldenrule'>
        <span className='first'>It all starts with the best popcorn seeds<br/> <span className='second'>We serve Popcorn and Italian Ice<br/> <br/>
        <Link className="button-85 roman" to="/offeringscreen">Go Shopping
        </Link>
        </span>
        </span>
        </div>
       
        </div>
    </div>
  
  )
}
