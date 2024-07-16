import React from 'react'
import Hero from '../Homepage/Hero/hero'
import Rout from '../Homepage/Secondrout/Rout'
import { Outlet } from 'react-router'

function FoodsComponent() {
  return (
    <div>
      <Hero/>
      <Rout/>
      <Outlet/>
    </div>
  )
}

export default FoodsComponent
