import React from 'react'
import Choose from '../Homepage/Choose/choose'
import rasm from '../../assets/salat.jpg'
import Card from '../Homepage/Card/Card'

function Set() {
  return (
    <div className='set'>
      <div className="set-container">  
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

export default Set
