import React, {useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { About, Home, Category,Services,ContactUs,ProductListing,BlogList, ProductDetails, Policy } from "./pages/index";
import Navbar from "./component/Navbar/Navbar";

import ReactGA from 'react-ga';
const TRACKING_ID = "G-TNCBMY3Q09"; 
ReactGA.initialize(TRACKING_ID);

export default function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
  
    <>  
      <Router>
      { <Navbar />}
      <Switch>
      <Route exact path="/" component={Home}></Route>
          <Route exact path="/category" component={Category}></Route>
          <Route exact path="/productlist/:category" component={ProductListing}></Route>
          <Route exact path="/productdetails/:product" component={ProductDetails}></Route>
          <Route exact path="/blogList" component={BlogList}></Route>   

          <Route exact path="/about" component={About}></Route>
          <Route exact path="/services" component={Services}></Route>  
          <Route exact path="/contactus" component={ContactUs}></Route>   
          <Route exact path="/policy" component={Policy}></Route>         
      </Switch> 
    
    </Router> 
    </>
  );
  }