import React from 'react';
import { useSelector } from "react-redux";
import { Login } from './components/Login';
import {Registration} from "./components/Registration";

const App = () => {

  const products = useSelector(state => state.products)
  const user = useSelector(state => state.user)
  console.log(user);

  return (
    <>
      {products.map(product => <div key={product.id}> {product.name}--{product.price}</div>)}

      {user.map(u => <div key={u.id}> {u.name}--{u.fName}</div>)}
      <Registration/>
      <Login/>


    </>
  )
}

export default App