import React from 'react';
import "./App.css";
import Home from "./screens/Home";
import MyOrder from './screens/MyOrder';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { CartProvider } from './components/ContextReducer';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route exact path = '/' element = {<Home/>}/>
            <Route exact path = '/login' element = {<Login/>}/>
            <Route exact path = '/CreateUser' element = {<SignUp/>}/>
            <Route exact path = '/myOrder' element = {<MyOrder/>}/>
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
