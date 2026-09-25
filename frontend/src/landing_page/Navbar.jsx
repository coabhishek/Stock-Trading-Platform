import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            <img src="/imgs/logo.svg" alt="nav_logo" />
          </Link>
            
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link" aria-current="page" to='/signup'>
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to='/about'>
                  About
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link" to='/product'>
                  Products
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link" to='/pricing'>
                  Pricing
                </Link>
              </li>
               <li class="nav-item">
                <Link class="nav-link" to='/support'>
                  Support
                </Link>
              </li>
              
              <span className="navbar-bar-icon"><i class="fa-solid fa-bars"></i></span>      
            </ul>
          
          </div>
        </div>
      </nav>
  );
}
