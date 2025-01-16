import React, { useEffect } from 'react';
import Helmet from 'react-helmet';
import { useTranslation } from 'react-i18next';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Category, Services, ContactUs, ProductListing, BlogList, BlogView,  ProductDetails, Policy, Partners, Designers, Whyus,BulkOrder, ZapierChatbot, Youtube } from "./pages/index";
import Navbar from "./component/Navbar/Navbar";
import { FloatingWhatsApp } from 'react-floating-whatsapp';


// import ReactGA from 'react-ga';
// const TRACKING_ID = "G-TNCBMY3Q09";  
// ReactGA.initialize(TRACKING_ID);

export default function App() {

  const { t } = useTranslation();

  // useEffect(() => {
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (

    <>
      <Helmet>
        <title>{t('TITLE')}</title>
        <meta name="description" content={t('DESCRIPTION')} />
      </Helmet>
      <Router>
        {<Navbar />}
      
        {<ZapierChatbot />}
      
     
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/category" component={Category}></Route>
          <Route exact path="/productlist/:category" component={ProductListing}></Route>
          <Route exact path="/productdetails/:product" component={ProductDetails}></Route>
          <Route exact path="/blogs" component={BlogList}></Route>
          <Route exact path="/blogs/:id" component={BlogView}></Route>


          <Route exact path="/services" component={Services}></Route>
          <Route exact path="/contactus" component={ContactUs}></Route>
          <Route exact path="/policy" component={Policy}></Route>
          <Route exact path="/partners" component={Partners}></Route>
          <Route exact path="/designers" component={Designers}></Route>
          <Route exact path="/whyus" component={Whyus}></Route>
          <Route exact path="/bulkorder" component={BulkOrder}></Route>
          <Route exact path="/videos" component={Youtube}></Route>
          
          
        </Switch>

      </Router>

      <FloatingWhatsApp
        phoneNumber='+919686722949'
        accountName='Ecowoodies'
        allowEsc
        allowClickAway
        notification
        chatMessage='Hello there! 🤝 How can we help?'
        buttonStyle={{
          left: '2rem'
        }}
        chatboxStyle={{
          left: '4rem'
        }} />
     
  
    </>
  );
}