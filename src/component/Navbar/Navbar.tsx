import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logos from "./ecoiconorignal.jpg"

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
              <MDBNavbarLink  tag='a' className='nav-link' active aria-current='page' href='/about'>About</MDBNavbarLink>
            </MDBNavbarItem>
          
            <MDBNavbarItem>
            <MDBNavbarLink  tag='a' className='nav-link' active aria-current='page' href='/contactus'>
                Contact Us
              </MDBNavbarLink>
            </MDBNavbarItem>
            

            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}

          
          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>

    // </header>
  );
};
export default Navbar;