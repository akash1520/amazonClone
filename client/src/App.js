import { Routes,Route } from 'react-router-dom';
import './App.css';
import Buynow from './Components/buynow/Buynow';
import Cart from './Components/cart/Cart';
import Footer from './Components/footer/Footer';
import Navbar from './Components/header/Navbar';
import Maincomp from './Components/home/Maincomp';
import Newnav from './Components/Newnavbar/Newnav';
import SignIn from './Components/signup/SignIn';
import SignUp from './Components/signup/SignUp';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Newnav/>
     <Routes>
        <Route path='' element={<Maincomp/>}/>
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>  }/>
        <Route path='/getproductsone/:id' element={<Cart/>}/>
        <Route path='/buynow' element={<Buynow/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
