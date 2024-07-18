import React from 'react'
import '../BigCard/Bigcard.css'
import rasm1 from '../../assets/download1.jpg'
import { useTranslation } from 'react-i18next'

function Bigcard() {
  const {t} = useTranslation()
  return (
    <div className='bigcard'>
      <div className="big-container">
        <ul className="big-item">
        <h2 className="filial-name">MaxWay Magic City</h2>
        <p className="filial-map">{t('Big.Big-title1')}</p>
        <p className="filial-time">{t('Filial.Filial-title')}: 10:00-03:00</p>
        <span className="filial-span"><p>{t('Big.Big-title2')}</p>
        <a className="filial-links" href="tel:+998931487733">+998 93 148 77 33</a></span>
        <p className="filial-orientr">{t('Big.Big-title3')}: Magic City</p>
        <img src={rasm1} alt="" width={"400"} height={"250"} className="filial-thumb"/>
        </ul>
        <ul className="big-item-right">
        <iframe className="filial-iframe" src="https://yandex.com/map-widget/v1/-/CCUBbKwFsD" frameborder="1" allowfullscreen="true"></iframe>
        </ul>
      </div>
    </div>
  )
}

export default Bigcard
