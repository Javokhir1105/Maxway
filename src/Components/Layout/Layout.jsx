import React from 'react'
import Header from '../Homepage/Header/header'
import { Outlet, useParams } from 'react-router'
import Hero from '../Homepage/Hero/hero'

export default function Layout() {
  return (
    <div>
      <Header/>
    </div>
  )
}
