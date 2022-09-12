import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useSelector } from "react-redux";
import Login from './components/Login';
import { Registration } from "./components/Registration";
import Home from './components/Home';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import ABout from './components/ABout';
import Contact from './components/Contact';
import Profile from './components/Profile';
const linkArray = ["Home", "Contact", "About", "Login", "Profile"];

const App = () => {

  // const products = useSelector(state => state.products)
  // const user = useSelector(state => state.user)
  // console.log(user);

  return (
    <>

      <Router>
       <Navbar links={linkArray} />
        <Routes>
          <Route path='/' element={<ABout />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/reg' element={<Auth />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/About' element={<ABout />} />
          <Route path='/Profile' element={<Profile />} />
          
        </Routes> 
        
      </Router>
    </>
  )
}

export default App