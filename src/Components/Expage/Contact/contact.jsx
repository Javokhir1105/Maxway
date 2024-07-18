import React from 'react'
import '../Contact/contact.css'
import { useTranslation } from 'react-i18next'

function contact() {
  const {t} = useTranslation()
  return (
    <div className='contact'>
      <div className="contact-container">
        <ul className="contact-item">
          <h1 className="contact-h1">{t('kontakt.kontakt-title1')}</h1>
          <p className="contact-p1">{t('kontakt.kontakt-title2')}</p>
          <li className="contact-list">
            <p className="contact-list-p">{t('kontakt.kontakt-title3')}</p>
            <a href="tel:+998931487733" className="contact-tel">+998931487733</a>
          </li>
          <li className="contact-list">
            <p className="contact-list-p">{t('kontakt.kontakt-title3')}</p>
            <a href="tel:+998931487733" className="contact-tel">+998931487733</a>
          </li>
          <li className="contact-list">
            <p className="contact-list-p">{t('kontakt.kontakt-title3')}</p>
            <a href="tel:+998931487733" className="contact-tel">+998931487733</a>
          </li>
        </ul>
        <ul className="contact-item">
          <h1 className="contact-h1">{t('kontakt.kontakt-title4')}</h1>
          <li className="contact-list">
            <p className="contact-list-p">{t('kontakt.kontakt-title5')}</p>
            <a href="mailto:jgayratov55@gmail.com" className="contact-tel">jgayratov55@gmail.com</a>
          </li>
          <li className="contact-list">
            <p className="contact-list-p">{t('kontakt.kontakt-title6')}</p>
            <a href="tel:+998908842515" className="contact-tel">+998908842515</a>
          </li>
        </ul>
        <ul className="contact-item">
          <h1 className="contact-h1">{t('kontakt.kontakt-title7')}</h1>
          <p className="contact-p1">{t('kontakt.kontakt-title8')}</p>
          <li className="contact-list">
            <p className="contact-list-p">{t('kontakt.kontakt-title5')}</p>
            <a href="mailto:jgayratov55@gmail.com" className="contact-tel">jgayratov55@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default contact
