import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logos from "./ecoiconorignal.jpg"
import Cataluge24 from "../Catalog/Ecowoodies Catalogue.pdf"
import ottomons from '../Catalog/Ecowoodies_Ottoman_Catalog.pdf'
import ottomonset from '../Catalog/Ecowoodies_OttomanSet_Catalog.pdf'



import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

//import { useHistory } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const [showBasic, setShowBasic] = useState(false);
  const [showNav, setShowNav] = useState(false);
  // const history = useHistory();
  const [firstName, setFirstName] = useState("");

  // const googleSignIn = async () => {
  //   try {
  //     await Auth();
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // useEffect(() => {
  //   // auth().onAuthStateChanged(function (user) {
  //   //   if (user) {
  //   //     setFirstName(user.displayName);
  //   //     console.log(firstName);
  //   //     history.push("/products");
  //   //   } else console.log("no user");
  //   });
  // }, [history, firstName]);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
          <img
            src={logos}
            height='70'
            alt=''
            loading='lazy'
          />
         Ecowoodies
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
          
              <MDBNavbarItem>
            <MDBNavbarLink  tag='a' className='nav-link' active aria-current='page' href='/category'>
                Products
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <MDBNavbarLink  tag='a' className='nav-link' active aria-current='page' href='/services'>
                Services
              </MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
            <MDBNavbarLink  tag='a' className='nav-link' active aria-current='page' href='https://www.ecowoodies.in'>
                Shop
              </MDBNavbarLink>          
            </MDBNavbarItem>
            
            <MDBNavbarItem>
            <MDBNavbarLink  tag='a' className='nav-link' active aria-current='page' href='/blogs'>
                Blogs
              </MDBNavbarLink>
            </MDBNavbarItem>

            {/* <MDBNavbarItem>
              <MDBNavbarLink  tag='a' className='nav-link' active aria-current='page' href='/partners'>Partners</MDBNavbarLink>
            </MDBNavbarItem> */}

            {/* <MDBNavbarItem>
              <MDBNavbarLink  tag='a' className='nav-link' active aria-current='page' href='/designers'>Designers</MDBNavbarLink>
            </MDBNavbarItem> */}

          <MDBNavbarItem>
            <MDBNavbarLink  tag='a' className='nav-link' active aria-current='page' href='/videos'>
                Videos
              </MDBNavbarLink>
            </MDBNavbarItem>
          

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' >
                  About
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href='/whyus' className='nav-link' active aria-current='page' >Why Us</MDBDropdownItem>
                  <MDBDropdownItem link href='/partners' className='nav-link' active aria-current='page'>Our Partners</MDBDropdownItem>
                  <MDBDropdownItem link href='/designers' className='nav-link' active aria-current='page'>Our Designers</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button' >
                  Catalogue
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link href={Cataluge24} className='nav-link' active aria-current='page' >Catalogue 2024</MDBDropdownItem>
                  <MDBDropdownItem link href={ottomons} className='nav-link' active aria-current='page'>Stools / Ottomon</MDBDropdownItem>
                  <MDBDropdownItem link href={ottomonset} className='nav-link' active aria-current='page'>Ottoman Set</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>


            
            <MDBNavbarItem>
           
            <MDBNavbarLink  tag='a' className='nav-link' active aria-current='page' href='/contactus'>
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>

          
          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    // </header>
  );
};
export default Navbar;