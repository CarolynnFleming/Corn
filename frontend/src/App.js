import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import OfferingScreen from "./screens/OfferingScreen";
// import BagScreen from "./screens/BagScreen";

// import MixesScreen from "./screens/MixesScreen";
import About from "./screens/About";
// import OnegScreen from "./screens/OnegScreen";
// import BucketScreen from "./screens/BucketScreen";
// import ContactScreen from "./screens/ContactScreen";
// import GrabnGoScreen from "./screens/GrabnGoScreen";
// import SportstinScreen from "./screens/SportstinScreen";
// import TwogScreen from "./screens/TwogScreen";
// import ThreegScreen from "./screens/ThreegScreen";

// import BagDetail from "./detail/BagDetail";
// import GngDetail from "./detail/GngDetail";
// import MixesDetail from "./detail/MixesDetail";
// import BucketDetail from "./detail/BucketDetail";
// import OnegDetail from "./detail/OnegDetail";
// import SportstinDetail from "./detail/SportstinDetail";
// import TwogDetail from "./detail/TwogDetail";
// import ThreegDetail from "./detail/ThreegDetail";
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
