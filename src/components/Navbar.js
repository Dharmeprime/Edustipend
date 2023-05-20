import React from "react";
import {Link} from 'react-router-dom';
// import {outlet} from 'react-router-dom';
import Edu from "./images/edu.png"


function Navbar(){
  return(
    <div>
      <nav className="navbar navbar-expand-lg mt-3 bg-body-tertiary">
        <div className="container-fluid">
                
          <Link to="/" className="navbar-brand" ><img src={Edu}/> Edustipend</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <Link to="/" className="active nav-link" >Contact us</Link>
              </li>

              <li className="nav-item">
                <button className="nav-link mt-1 btn btn-sm me-3" style={{width:"120px", padding:"3px"}} href="/">Sign up</button>
              </li>
                
            </ul>
            
          </div>
        </div>
      </nav>
      
    </div>
      )
    }
export default Navbar;