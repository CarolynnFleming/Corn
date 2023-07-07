import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import OfferingScreen from "./screens/OfferingScreen";

import About from "./screens/About";
import CartScreen from "./screens/CartScreen";
import Header from "./components/Header";
import Fail from "./components/Fail";
import Yay from "./components/Yay";
import { Detail } from "./detail/Detail";
import BagScreen from "./screens/BagScreen";
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
            <Route exact path="/success" element={<Yay />} />
            <Route exact path="/canceled" element={<Fail />} />
            <Route exact path="/:container" element={<BagScreen />} />
            <Route exact path="/:container/:product" element={<Detail />} />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        </main>
        <footer className="bottom">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}
export default App;

// GRAB N GO SEPARATE
//
