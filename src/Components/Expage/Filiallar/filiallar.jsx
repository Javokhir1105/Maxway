import React from 'react'
import '../Filiallar/filiallar.css'

function filiallar() {
  return (
    <div className='filial'>
      <div className="filial-container">
         <ul className="filial-item">
          <li className="filial-list">
            <h2 className="filial-h2">MaxWay Magic City</h2>
            <p className="filial-p">Magic City, Navoiy, 26, Ташкент, Узбекистан</p>
          </li>
          <li className="filial-list">
            <p className="filial-subtext">Часы работы</p>
            <p className="filial-text">10:00-03:00</p>
          </li>
         </ul>
         <ul className="filial-item">
          <li className="filial-list">
            <h2 className="filial-h2">MaxWay Tashkent City</h2>
            <p className="filial-p">Magic City, Navoiy, 26, Ташкент, Узбекистан</p>
          </li>
          <li className="filial-list">
            <p className="filial-subtext">Часы работы</p>
            <p className="filial-text">10:00-03:00</p>
          </li>
         </ul>
         <ul className="filial-item">
          <li className="filial-list">
            <h2 className="filial-h2">MaxWay Chilanzar City</h2>
            <p className="filial-p">Magic City, Chilanzar, 4, Ташкент, Узбекистан</p>
          </li>
          <li className="filial-list">
            <p className="filial-subtext">Часы работы</p>
            <p className="filial-text">10:00-03:00</p>
          </li>
         </ul>
      </div>
    </div>
  )
}

export default filiallar
