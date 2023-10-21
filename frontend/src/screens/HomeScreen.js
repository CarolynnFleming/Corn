import FifthBanner from "../components/banners/FifthBanner";
// import FourthBanner from "../components/banners/FourthBanner";
import MainBanner from "../components/banners/MainBanner";
import SecondBanner from "../components/banners/SecondBanner";
import SixthBanner from "../components/banners/SixthBanner";
import ThirdBanner from "../components/banners/ThirdBanner";
import Des1 from "../components/banners/Des1";
import Ew from "../components/banners/Ew";
import Des2 from "../components/banners/Des2";
// import Des3 from "../components/banners/Des3";
// import Des4 from "../components/banners/Des4";
// import Des5 from "../components/banners/Des5";

import Des7 from "../components/banners/Des7";
// import Inbetween1 from "../components/banners/Inbetween1";

import GngBanner from "../components/banners/GngBanner";
import Words from "../components/banners/Words";
import FourthBanner from "../components/banners/FourthBanner";
// import background from '../../assets/background.jpeg';
export default function HomeScreen() {


  return(
   
        <div className="grid-container" >
          <Des1/>
          
        <MainBanner/>
        <Des2/>
        <SecondBanner/>
        {/* <Inbetween1/> */}
        <Ew/>
        <Words/>
        
       <GngBanner/>
       <Des2/>
       {/* <FourthBanner/> */}
       <FourthBanner/>
       <Des1/>
          
       
      <ThirdBanner/>
      <Des2/>
       <FifthBanner/>
       
       <SixthBanner/>
       <Des7/>
        </div>

  
  )
}

