
import './App.css'
import Header from './Components/Homepage/Header/header'
import Layout from './Components/Layout/Layout'
import Hero from './Components/Homepage/Hero/hero'
import Card from './Components/Homepage/Card/Card'
import Choose from './Components/Homepage/Choose/choose'
import Rout from './Components/Homepage/Secondrout/Rout'
import { Outlet } from 'react-router'
import Footer from './Components/Homepage/Footer/footer'

function App() {

  return (
    <div>
      <Header/>
      <main><Outlet/></main>
      <Footer />
    </div>
  )
}

export default App
