import React from 'react'
import '../Card/Card.css'
import rasm1 from '../../../assets/gosht.jpg'

function Card({name,rasmlar}) {
    return (
        <div className='card'>
            <div className="card-container">
                <img src={rasmlar} alt="" className="card-img" />
                <h3 className="card-h3">{name}</h3>
                <p className="card-p">Информация: лаваш мясной classic, картофель-фри, пеп</p>
                <li className="card-list">
                    <span className="cars-span">2.29          CYM</span>
                    <button className="card-button">Заказать</button>
                </li>
            </div>
        </div>
    )
}

export default Card
