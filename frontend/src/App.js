
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import OfferingScreen from './screens/OfferingScreen';
import BagScreen from './screens/BagScreen';

import MixesScreen from './screens/MixesScreen';
import About from './screens/About';
import OnegScreen from './screens/OnegScreen'
import BucketScreen from './screens/BucketScreen'
import ContactScreen from './screens/ContactScreen';
import GrabnGoScreen from './screens/GrabnGoScreen';
import SportstinScreen from './screens/SportstinScreen';
import TwogScreen from './screens/TwogScreen';
import ThreegScreen from './screens/ThreegScreen';
import BagDetail from './detail/BagDetail';
import GngDetail from './detail/GngDetail';
import MixesDetail from './detail/MixesDetail';
import BucketDetail from './detail/BucketDetail';
import OnegDetail from './detail/OnegDetail';
import SportstinDetail from './detail/SportstinDetail';
import TwogDetail from './detail/TwogDetail';
import ThreegDetail from './detail/ThreegDetail';
import CartScreen from './screens/CartScreen';
import Header from './components/Header';
import Fail from './components/Fail';
import Yay from'./components/Yay';
function App() {
 
  return (
    <BrowserRouter>
    <div className="grid-container">
      <Header/>
   
    <main>

      <Routes>

      <Route exact path="/about" element={<About/>}></Route>
      <Route exact path="/3gallontin" element={<ThreegScreen/>}></Route>
      <Route exact path="/2gallontin" element={<TwogScreen/>}></Route>
      <Route exact path="/1gallonsportstin" element={<SportstinScreen/>}></Route>
      <Route exact path="/1gallon" element={<OnegScreen/>}></Route>
      <Route exact path="/threeg" element={<ThreegScreen/>}></Route>
      <Route exact path="/threeg/:id" element={<ThreegDetail/>}></Route>
      <Route exact path="/twog" element={<TwogScreen/>}></Route>
      <Route exact path="/twog/:id" element={<TwogDetail/>}></Route>
      <Route exact path="/sportstin" element={<SportstinScreen/>}></Route>
      <Route exact path="/sportstin/:id" element={<SportstinDetail/>}></Route>
      <Route exact path="/oneg" element={<OnegScreen/>}></Route>
      <Route exact path="/bucket" element={<BucketScreen/>}></Route>
      <Route exact path="/Gng" element={<GrabnGoScreen/>}></Route>
      <Route exact path="/contactscreen" element={<ContactScreen/>}></Route>
      <Route exact path="/offeringscreen" element={<OfferingScreen/>}></Route>
      <Route exact path='/cartscreen' element={<CartScreen/>}></Route>
      <Route exact path="/Bags/:id" element={<BagDetail/>}></Route>
      <Route exact path="/Gng/:id" element={<GngDetail/>}></Route>
      <Route exact path="/Bags" element={<BagScreen/>}></Route>
      <Route exact path="/bucket/:id" element={<BucketDetail/>}></Route>
      <Route exact path="/mixesbags" element={<MixesScreen/>}></Route>
      <Route exact path="/mixesbags/:id" element={<MixesDetail/>}/>
      <Route exact path="/oneg/:id" element={<OnegDetail/>}/>
      <Route exact path='/success' element={<Yay/>}/>
      <Route exact path='/canceled' element={<Fail/>}/>
      <Route exact path="/" element={<HomeScreen/>}/>
      </Routes>


    </main>
    <footer className="bottom">
    
        All rights reserved
        
    </footer>
</div>
</BrowserRouter>
  );
}
export default App;

