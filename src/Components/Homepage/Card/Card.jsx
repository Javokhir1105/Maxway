import React from 'react'
import '../Card/Card.css'
import rasm1 from '../../../assets/gosht.jpg'
import { useTranslation } from 'react-i18next'

function Card({name,rasmlar}) {
    const {t} = useTranslation()
    return (
        <div className='card'>
            <div className="card-container">
                <img src={rasmlar} alt="" className="card-img" />
                <h3 className="card-h3">{name}</h3>
                <p className="card-p">{t('Card.Card-title')}</p>
                <li className="card-list">
                    <span className="cars-span">2.29          CYM</span>
                    <button className="card-button">{t('Card.Card-btn')}</button>
                </li>
            </div>
        </div>
    )
}

export default Card
