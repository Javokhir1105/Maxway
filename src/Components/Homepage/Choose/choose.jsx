import React from 'react'
import './choose.css'
import Card from '../Card/Card'
import rasm from '../../../assets/gosht.jpg'

function Choose() {
  return (
    <div className='choose'>
      <div className="choose-container">  
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

export default Choose
