import React from 'react'
import Choose from '../Homepage/Choose/choose'
import Card from '../Homepage/Card/Card'
import rasm from '../../assets/xotdog.png'

function Xotdog() {
  return (
    <div className='Xotdog'>
      <div className="xotdog-container">  
        <Card name={'javohirning ajoyib hotdoglari'} rasmlar={rasm}/>
        <Card  name={'Bu yerda tanlov imkoniyati yuq'} rasmlar={rasm}/>
        <Card name={'kozingizni yumib tanlayvering '} rasmlar={rasm}/>
        <Card name={'Maslahatim pullik'} rasmlar={rasm}/>
        <Card name={'A tavsiya esa tekin '} rasmlar={rasm}/>
        <Card name={'Istasangiz tavsiya oling'} rasmlar={rasm}/>
        <Card name={'Tavsiyam esa keyingi kardda'} rasmlar={rasm}/>
        <Card name={'Ha erinmay oqidingiz a'} rasmlar={rasm}/>
        <Card name={'Ha mayli aytaman'} rasmlar={rasm}/>
      </div>
    </div>
  )
}

export default Xotdog