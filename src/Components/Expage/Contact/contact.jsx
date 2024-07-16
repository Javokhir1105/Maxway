import React from 'react'
import '../Contact/contact.css'

function contact() {
  return (
    <div className='contact'>
      <div className="contact-container">
        <ul className="contact-item">
          <h1 className="contact-h1">Телефоны контактных центров</h1>
          <p className="contact-p1">Круглосуточно, без выходных</p>
          <li className="contact-list">
            <p className="contact-list-p">Ташкент</p>
            <a href="tel:+998931487733" className="contact-tel">+998931487733</a>
          </li>
          <li className="contact-list">
            <p className="contact-list-p">Ташкент</p>
            <a href="tel:+998931487733" className="contact-tel">+998931487733</a>
          </li>
          <li className="contact-list">
            <p className="contact-list-p">Ташкент</p>
            <a href="tel:+998931487733" className="contact-tel">+998931487733</a>
          </li>
        </ul>
        <ul className="contact-item">
          <h1 className="contact-h1">Отдел поддержки клиентов</h1>
          <li className="contact-list">
            <p className="contact-list-p">Электронная почта</p>
            <a href="mailto:jgayratov55@gmail.com" className="contact-tel">jgayratov55@gmail.com</a>
          </li>
          <li className="contact-list">
            <p className="contact-list-p">Контактный телефон</p>
            <a href="tel:+998908842515" className="contact-tel">+998908842515</a>
          </li>
        </ul>
        <ul className="contact-item">
          <h1 className="contact-h1">Правообладателям</h1>
          <p className="contact-p1">По вопросам, возникшим в связи с предположительным неправомерным использованием товарных знаков, логотипов и иных материалов, просим обращаться по е-мейлу с приложением подтверждающих документов</p>
          <li className="contact-list">
            <p className="contact-list-p">Электронная почта</p>
            <a href="mailto:jgayratov55@gmail.com" className="contact-tel">jgayratov55@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default contact
