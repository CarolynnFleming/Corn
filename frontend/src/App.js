import { BrowserRouter, Route, Routes } from "react-router-dom";

import OfferingScreen from "./screens/OfferingScreen";

import { Link } from "react-router-dom";



import ContactScreen from "./screens/ContactScreen";
import facebook from './facebook.png';
import HomeScreen from "./screens/HomeScreen";


import CartScreen from "./screens/CartScreen";
import Header from "./components/Header";
import Fail from "./components/Fail";
import Yay from "./components/Yay";
import { Detail } from "./detail/Detail";
import BagScreen from "./screens/BagScreen";
import MainBanner from "./components/banners/MainBanner";
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        
        <main>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
         
            <Route
              
              path="/offeringscreen"
              element={<OfferingScreen />}
            ></Route>
            <Route path="/cartscreen" element={<CartScreen />}></Route>
            <Route  path="/contactscreen" element={<ContactScreen />}></Route>
            <Route  path="/success" element={<Yay />} />
            <Route  path="/canceled" element={<Fail />} />
            <Route  path="/:container" element={<BagScreen />} />
            <Route  path="/:container/:product" element={<Detail />} / 
                </Routes>
        </main>
        <footer className="bottom">© 2023 What's Poppin Gourmet Popcorn and Italian Ice
       <Link to="https://www.facebook.com/Whatspoppin11517?mibextid=LQQJ4d"> <img className="facebook" src={facebook} alt="facebook icon"/></Link></footer>
        
      </div>
    </BrowserRouter>
  );
}
export default App;
