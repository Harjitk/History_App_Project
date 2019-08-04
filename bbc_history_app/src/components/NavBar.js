import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css"


const NavBar = () => (
  
  
  <ol className='nav-items'>
    <li>
      <Link to="/contact">Register</Link>

    </li>
    <li>
            <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/">Home</Link>
    </li>

  </ol>

)



export default NavBar;
