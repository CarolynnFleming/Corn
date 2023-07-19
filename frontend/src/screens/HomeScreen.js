// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import dImage from '../Computer.jpg';
// import mImage from '../iPhone.jpg';
import Turnstyle from '../components/Turnstyle';

export default function HomeScreen() {

  // const useWindowFit = () => {
  //   const [windowW, setWindowW] = useState(window.innerWidth);

  //   useEffect(() => {
  //     const handleWindowR = () => {
  //     setWindowW(window.innerWidth);
  //   };
  //   window.addEventListener('resize', handleWindowR);
  //   return () => window.removeEventListener('resize', handleWindowR)
  // }, []);
  // return windowW;
  // };

  // const imageUrl = useWindowFit() >= 650 ? dImage : mImage;
  return(
  //   <div className='row center' style={{background: `url(${imageUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
   
        <div className='home-card'>
        
        <Turnstyle/>
       
        
       <div className='goldenrule'>
        <span className='first'>It all starts with the best popcorn seeds<br/> <span className='second'>We serve Popcorn and Italian Ice<br/> <br/>
        <Link className="button-85 roman" to="/offeringscreen">Go Shopping
        </Link>
        </span>
        </span>
        </div>
       
        </div>
    // </div>
  
  )
}

