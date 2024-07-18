import React from 'react'
import '../Secondrout/Rout.css'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Rout() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const {t} = useTranslation()
  return (
  <>
      <div className='rout'>
      <div className="rout-container">
         <NavLink  className={`rout-link  ${splitLocation[1] === "" ? "active1" : ""}`} to="/" >{t('Rout.Rout-title1')}</NavLink>
         <NavLink  to="/set" className={`rout-link  ${splitLocation[1] === "set" ? "active1" : ""}`}>{t('Rout.Rout-title2')}</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "xaggi" ? "active1" : ""}`} to="/xaggi"  >{t('Rout.Rout-title3')}</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "burger" ? "active1" : ""}`} to="/burger" >{t('Rout.Rout-title4')}</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "pizza" ? "active1" : ""}`} to="/pizza"  >{t('Rout.Rout-title5')}</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "burger" ? "active1" : ""}`} to="/burger"  >{t('Rout.Rout-title6')}</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "xaggi" ? "active1" : ""}`} to="/xaggi"  >{t('Rout.Rout-title7')}</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "xotdog" ? "active1" : ""}`} to="/xotdog"   >{t('Rout.Rout-title8')}</NavLink>
         <NavLink  className={`rout-link  ${splitLocation[1] === "set" ? "active1" : ""}`}to="/set"  >{t('Rout.Rout-title9')}</NavLink>
      </div>
    </div>
  </>
  )
}

export default Rout
