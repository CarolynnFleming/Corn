
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import OfferingScreen from './screens/OfferingScreen';
import BagScreen from './screens/BagScreen';
import popcorn from './assets/popcorn.gif';
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
import { useContext } from 'react';
import CartContext from './Context/Cart/CartContext';
import { Link } from 'react-router-dom';
import Success from './components/success';
import Canceled from './components/canceled';
function App() {
  const { cartItems } = useContext(CartContext);
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div><Link to="/">
            <img className="popcorn"src={popcorn} alt="popcorn"/></Link>
           
            <Link to="/" className="brand">WHATS POPPIN</Link>
        </div>
    
            
                  
                  <div className="follow">
                  
                  <Link className="rainbow-4" to="/offeringscreen">Offerings</Link>
                  
                    <Link className="rainbow-4" to="/cartscreen">Cart
                    {cartItems.length > 0 && (

                      <span className='badge'>{cartItems.length}</span>
                      )}</Link>
            <Link className="rainbow-4" to="/signIn">Sign In</Link>
            
              </div>
        

    </header>
    <main>

      <Routes>

      <Route path="/about" element={<About/>}></Route>
      <Route path="/3gallontin" element={<ThreegScreen/>}></Route>
      <Route path="/2gallontin" element={<TwogScreen/>}></Route>
      <Route path="/1gallonsportstin" element={<SportstinScreen/>}></Route>
      <Route path="/1gallon" element={<OnegScreen/>}></Route>
      <Route path="/threeg" element={<ThreegScreen/>}></Route>
      <Route path="/threeg/:id" element={<ThreegDetail/>}></Route>
      <Route path="/twog" element={<TwogScreen/>}></Route>
      <Route path="/twog/:id" element={<TwogDetail/>}></Route>
      <Route path="/sportstin" element={<SportstinScreen/>}></Route>
      <Route path="/sportstin/:id" element={<SportstinDetail/>}></Route>
      <Route path="/oneg" element={<OnegScreen/>}></Route>
      <Route path="/bucket" element={<BucketScreen/>}></Route>
      <Route path="/Gng" element={<GrabnGoScreen/>}></Route>
      <Route path="/contactscreen" element={<ContactScreen/>}></Route>
      <Route path="/offeringscreen" element={<OfferingScreen/>}></Route>
      <Route path='/cartscreen' element={<CartScreen/>}></Route>
      <Route path="/Bags/:id" element={<BagDetail/>}></Route>
      <Route path="/Gng/:id" element={<GngDetail/>}></Route>
      <Route path="/Bags" element={<BagScreen/>}></Route>
      <Route path="/bucket/:id" element={<BucketDetail/>}></Route>
      <Route path="/mixesbags" element={<MixesScreen/>}></Route>
      <Route path="/mixesbags/:id" element={<MixesDetail/>}></Route>
      <Route path="/oneg/:id" element={<OnegDetail/>}></Route>
      <Route path='/success' element={<Success/>}></Route>
      <Route path='/canceled' element={<Canceled/>}></Route>
      <Route path="/" element={<HomeScreen/>} exact></Route>
      </Routes>


    </main>
    <footer className="bottom">
    <Link className="rainbow-4" to="/contactscreen">Contact</Link>
        All rights reserved
        <Link className="rainbow-4" to="/about">About</Link>
    </footer>
</div>
</BrowserRouter>
  );
}
export default App;

