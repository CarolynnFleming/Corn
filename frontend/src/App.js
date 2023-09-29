import { BrowserRouter, Route, Routes } from "react-router-dom";

import OfferingScreen from "./screens/OfferingScreen";

import { Link } from "react-router-dom";
import About from "./screens/About";


import ContactScreen from "./screens/ContactScreen";
import facebook from './facebook.png';



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
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact
              path="/offeringscreen"
              element={<OfferingScreen />}
            ></Route>
            <Route exact path="/cartscreen" element={<CartScreen />}></Route>
            <Route exact path="/contactscreen" element={<ContactScreen />}></Route>
            <Route exact path="/success" element={<Yay />} />
            <Route exact path="/canceled" element={<Fail />} />
            <Route exact path="/:container" element={<BagScreen />} />
            <Route exact path="/:container/:product" element={<Detail />} />
            
          </Routes>
          <MainBanner/>
        </main>
        <footer className="bottom">© 2023 What's Popping Popcorn
       <Link to="https://www.facebook.com/Whatspoppin11517?mibextid=LQQJ4d"> <img className="facebook" src={facebook} alt="facebook icon"/></Link></footer>
        
      </div>
    </BrowserRouter>
  );
}
export default App;
