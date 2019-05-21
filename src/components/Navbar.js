import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import companyLogo from '../companyLogo.png';
import styled from 'styled-components';

// ----Start Import Styled Components
import {ButtonContainer} from './StyledComponents/Button';
// ----End Import Styled Components


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavWrapper className="navbar fixed-top navbar-expand-sm navbar-dark px-sm-5 ">
          <Link to="/">
            <img src={companyLogo} alt="storeBrand" className="navbar-brand"/>
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="navbar-item ml-5">
              <Link to="/" className="nav-link text-uppercase">
                books
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">CART</span><i className="fas fa-cart-plus"></i> 
            </ButtonContainer>
          </Link>
        </NavWrapper>
      </div>
    )
  }
}

const NavWrapper=styled.nav`
  background: var(--mainDark);
  .nav-link{
    color:var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
  font-family: 'PT Sans', sans-serif;

`