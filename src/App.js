import './App.css';
import Navbar from './MyComponents/Navbar';
import Body from './MyComponents/Body';
import Consultancy from './MyComponents/Consultancy';
import Footer from './MyComponents/Footer';
import Sign from './MyComponents/Sign';
import TaxCalculator from './MyComponents/TaxCalculator';
import AboutUs from './MyComponents/AboutUs';
import Profile from './MyComponents/Profile';
import {

  Route,
  Routes
} from "react-router-dom";
import LoanCalculator from './MyComponents/LoanCalculator';
import { useState } from 'react';

function App() {

  const [user,setUser] = useState({
    name:"",
    email:"",
    consultData:[]
  })


   return (
     <>
      
      <Navbar name={user.name}/>
      {/* <TaxCalculator /> */}
      {/* <BrowserRouter> */}
          <Routes>
          <Route exact path="/TaxCalculator" element={<TaxCalculator />} />
          <Route index element={<Body />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path='/consultancy' element={<Consultancy userId = {user._id} />} />
          <Route exact path='/EMIcalculator' element={<LoanCalculator />} />
          <Route exact path='/singup-login' element={<Sign setUser = {setUser}/>} />
          <Route exact path='/profile' element={<Profile user = {user} />} />
          </Routes>
          {/* </BrowserRouter> */}
      <Footer />
    </>
  );
 
}

export default App;
