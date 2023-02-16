import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { About, Home, ProductList,Services } from "./pages/index";
import Navbar from "./component/Navbar/Navbar";

export default function App() {
  return (
  
    <>  
      <Router>
      { <Navbar />}
      <Switch>
      <Route exact path="/" component={Home}></Route>
          <Route exact path="/products" component={ProductList}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/services" component={Services}></Route>           
      </Switch> 
    
    </Router> 
    </>
  );
  }