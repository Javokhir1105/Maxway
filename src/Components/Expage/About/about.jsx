import React from 'react'
import '../About/about.css'
import { useTranslation } from 'react-i18next'

export default function about() {
  const {t} = useTranslation()
  return (
    <div className='about'>
      <div className="about-container">
        <img className='about-img' src="https://sfood-2022.netlify.app/static/media/about.c0e48b35ff94335b9398.png" alt="" class="about-img" />
        <h1 className="about-h1">{t('About.About-title1')}</h1>
        <p className="about-p">{t('About.About-title2')}</p>
      </div>
    </div>
  )
}
