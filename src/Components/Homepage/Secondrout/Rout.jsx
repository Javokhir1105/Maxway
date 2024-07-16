import React from 'react'
import '../Secondrout/Rout.css'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'

function Rout() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
  <>
      <div className='rout'>
      <div className="rout-container">
         <NavLink  className={`rout-link  ${splitLocation[1] === "" ? "active1" : ""}`} to="/" >Desert</NavLink>
         <NavLink  to="/set" className={`rout-link  ${splitLocation[1] === "set" ? "active1" : ""}`}>Set</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "xaggi" ? "active1" : ""}`} to="/xaggi"  >Xaggi</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "burger" ? "active1" : ""}`} to="/burger" >Burger</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "pizza" ? "active1" : ""}`} to="/pizza"  >Pizza</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "burger" ? "active1" : ""}`} to="/burger"  >Sendvich</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "xaggi" ? "active1" : ""}`} to="/xaggi"  >Donar</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "xotdog" ? "active1" : ""}`} to="/xotdog"   >Xot-dog</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "set" ? "active1" : ""}`}to="/set"  >Water</NavLink>
      </div>
    </div>
  </>
  )
}

export default Rout
