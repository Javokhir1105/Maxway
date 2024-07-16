import React from 'react'
import rasm from '../../assets/Pizza.jpg'
import Choose from '../Homepage/Choose/choose'
import Card from '../Homepage/Card/Card'

function Pizza() {
  return (
    <div className='pizza'>
      <div className="pizza-container">  
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card  name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
        {/* <Card name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/>
        <Card name={'javohir'} rasmlar={rasm}/> */}
      </div>
    </div>
  )
}

export default Pizza