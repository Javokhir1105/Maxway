import React from 'react'
import './choose.css'
import Card from '../Card/Card'
import rasm from '../../../assets/gosht.jpg'
import { useTranslation } from 'react-i18next'

function Choose() {
  const {t}= useTranslation()
  return (
    <div className='choose'>
      <div className="choose-container">  
        <Card name={t('Choose.Choose-title1')} rasmlar={rasm}/>
        <Card  name={t('Choose.Choose-title2')} rasmlar={rasm}/>
        <Card name={t('Choose.Choose-title3')} rasmlar={rasm}/>
        <Card name={t('Choose.Choose-title4')} rasmlar={rasm}/>
        <Card name={t('Choose.Choose-title5')} rasmlar={rasm}/>
        <Card name={t('Choose.Choose-title6')} rasmlar={rasm}/>
        <Card name={t('Choose.Choose-title7')} rasmlar={rasm}/>
        <Card name={t('Choose.Choose-title8')} rasmlar={rasm}/>
        <Card name={t('Choose.Choose-title9')} rasmlar={rasm}/>
      </div>
    </div>
  )
}

export default Choose
