import React from 'react';
import { useSelector } from "react-redux";
import { Login } from './components/Login';
import { Registration } from "./components/Registration";
import Home from './components/Home';
import Auth from './components/Auth';
import Navbar from './components/Navbar';
const linkArray=["Home", "COntact","About"];

const App = () => {

  const products = useSelector(state => state.products)
  const user = useSelector(state => state.user)
  console.log(user);

  return (
    <>
      <Navbar links={linkArray}/>
      <Auth />
    </>
  )
}

export default App