import React from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { About, Home, Category,Services,ContactUs,ProductListing,OldProductList } from "./pages/index";
import Navbar from "./component/Navbar/Navbar";

export default function App() {
  return (
  
    <>  
      <Router>
      { <Navbar />}
      <Switch>
      <Route exact path="/" component={Home}></Route>
          <Route exact path="/category" component={Category}></Route>
          <Route exact path="/productlist" component={ProductListing}></Route>
          <Route exact path="/oldproductList" component={OldProductList}></Route>   

          <Route exact path="/about" component={About}></Route>
          <Route exact path="/services" component={Services}></Route>  
          <Route exact path="/contactus" component={ContactUs}></Route>         
      </Switch> 
    
    </Router> 
    </>
  );
  }