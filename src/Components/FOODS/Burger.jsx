import React from 'react'
import Choose from '../Homepage/Choose/choose'
import rasm from '../../assets/gamburger.png'
import Card from '../Homepage/Card/Card'

function Burger() {
  return (
    <div className='burger'>
      <div className="burger-container">  
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card  name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
      </div>
    </div>
  )
}

export default Burger
