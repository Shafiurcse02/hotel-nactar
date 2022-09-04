import React from 'react';
import { useSelector } from "react-redux";
import { Login } from './components/Login';
import {Registration} from "./components/Registration";
import Home from './components/Home';
import Auth from './components/Auth';

const App = () => {

  const products = useSelector(state => state.products)
  const user = useSelector(state => state.user)
  console.log(user);

  return (
    <>
     <Auth/>
    </>
  )
}

export default App