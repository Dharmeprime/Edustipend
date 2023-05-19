import React from "react";


function Navbar(){
  return(
    <nav class="navbar navbar-expand-lg mt-3 bg-body-tertiary">
      <div class="container-fluid">
               
        <a class="navbar-brand" href="/"> Edustipend</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li class="nav-item">
              <a class="active nav-link" href="/">Contact us</a>
            </li>

            <li class="nav-item">
              <button class="nav-link mt-1 btn btn-sm me-3" style={{width:"120px", padding:"3px"}} href="/">Sign up</button>
            </li>
              
          </ul>
          
        </div>
      </div>
    </nav>
      )
    }
export default Navbar;