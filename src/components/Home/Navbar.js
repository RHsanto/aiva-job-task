import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container-fluid p-0'>
      {/* here add navbar section */}
  <nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container">
    <a class="navbar-brand fs-2" href="/">Aiva</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      {/* here all navigate section */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0  ">
      <NavLink
        to="/spinning"
        className={isActive =>
       "nav-link" + (!isActive ? " unselected" : "")
       }  >
      Spinning
     </NavLink>
      <NavLink
        to="/draggable"
        className={isActive =>
       "nav-link" + (!isActive ? " unselected" : "")
       }  >
      Draggable
     </NavLink>
      <NavLink
        to="/details"
        className={isActive =>
       "nav-link" + (!isActive ? " unselected" : "")
       }  >
      Details Card
     </NavLink>
      <NavLink
        to="/colorPicker"
        className={isActive =>
       "nav-link" + (!isActive ? " unselected" : "")
       }  >
      Color Picker
     </NavLink>
       
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  );
};

export default Navbar;