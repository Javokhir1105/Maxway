import React from 'react'
import '../Filiallar/filiallar.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function filiallar() {
  const {t} = useTranslation()
  return (
    <div className='filial'>
      <div className="filial-container">
        <Link to="/filialCard">
        <ul className="filial-item">
          <li className="filial-list">
            <h2 className="filial-h2">MaxWay Magic City</h2>
            <p className="filial-p">Magic City, Navoiy, 26, Ташкент, Узбекистан</p>
          </li>
          <li className="filial-list">
            <p className="filial-subtext">{t('Filial.Filial-title')}</p>
            <p className="filial-text">10:00-03:00</p>
          </li>
         </ul>
        </Link>
         <Link to="/filialCard">
         <ul className="filial-item">
          <li className="filial-list">
            <h2 className="filial-h2">MaxWay Tashkent City</h2>
            <p className="filial-p">Magic City, Navoiy, 26, Ташкент, Узбекистан</p>
          </li>
          <li className="filial-list">
            <p className="filial-subtext">{t('Filial.Filial-title')}</p>
            <p className="filial-text">10:00-03:00</p>
          </li>
         </ul>
         </Link>
        <Link to="/filialCard">
        <ul className="filial-item">
          <li className="filial-list">
            <h2 className="filial-h2">MaxWay Chilanzar City</h2>
            <p className="filial-p">Magic City, Chilanzar, 4, Ташкент, Узбекистан</p>
          </li>
          <li className="filial-list">
            <p className="filial-subtext">{t('Filial.Filial-title')}</p>
            <p className="filial-text">10:00-03:00</p>
          </li>
         </ul>
        </Link>
      </div>
    </div>
  )
}

export default filiallar
