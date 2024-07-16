import React, { useState } from 'react'
import '../Header/header.css'
import { NavLink, Outlet } from 'react-router-dom'
import { Button, Modal } from 'antd';
import Hero from '../Hero/hero'
import ButtonGroup from 'antd/es/button/button-group';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className='header'>
        <div className="header-container">
          <div className="header-part">
            <a href="#" className="header-part-link">Sfood</a>
            <ul className="header-item">
              <NavLink to={'/'} className="header-item-link" active >Главная</NavLink>
              <NavLink to={'/filiallar'} className="header-item-link" active>Филиалы</NavLink>
              <NavLink to={'/about'} className="header-item-link" active>О нас</NavLink>
              <NavLink to={'/contact'} className="header-item-link" active>Контакты</NavLink>
            </ul>
          </div>
          <div className="header-part-two">
            <button className='bascet-btn' > <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg"><path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path></svg></button>
            <Button type="primary" onClick={showModal} className="header-part-button">Войти</Button>
            <Modal className='Modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
               <h1 className="header-m-h1">Добро пожаловать</h1>
               <p className="header-m-p">Войдите с вашим номером телефона</p>
               <input type='number' placeholder='+998987654321'/><br/>
               <button className="header-m-button">Войти</button>
            </Modal>

          </div>
        </div>
      </div>
    </>
  )
}

export default Header
