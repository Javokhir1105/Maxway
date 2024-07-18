import React, { useEffect, useState } from 'react'
import '../Header/header.css'
import { NavLink, Outlet } from 'react-router-dom'
import { Button, Modal } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import { Translation, useTranslation } from 'react-i18next';

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [items, setItems] = useState([]);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.target.value);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const sendMessageToTelegram = (e) => {
    e.preventDefault()
     const token = "6757145376:AAHSqi6W4lT7vqtPXltbUDLl7drJytYTylo";
    const chat_id = 2055583199;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const message = `ism: ${name} \ntelefon: ${phone}`;

    const params = {
      chat_id: chat_id,
      text: message
    };
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    })
      .then((response) => response.json())
      .then((res) => {
        alert("Yuborildi");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  const notify = () => toast("Wow so easy!");

  return (
    <>
      <div className='header'>
        <div className="header-container">
          <div className="header-part">
            <a href="#" className="header-part-link">Sfood</a>
            <ul className="header-item">
              <NavLink to={'/'} className="header-item-link" active>{t('header.header-title1')}</NavLink>
              <NavLink to={'/filiallar'} className="header-item-link" active>{t('header.header-title2')}</NavLink>
              <NavLink to={'/about'} className="header-item-link" active>{t('header.header-title3')}</NavLink>
              <NavLink to={'/contact'} className="header-item-link" active>{t('header.header-title4')}</NavLink>
            </ul>
          </div>
          <div className="header-part-two">
            <button className='bascet-btn'>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
            <select name="language" onChange={changeLanguage} value={i18n.language} style={{ marginRight: "20px" }}>
              <option value="uz">Uzbek</option>
              <option value="en">English</option>
              <option value="ru">Russian</option>
            </select>
            <Button type="primary" onClick={showModal} className="header-part-button">{t('header.header-title5')}</Button>
            <Modal className='Modal' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={""}>
              <form onSubmit={sendMessageToTelegram}>
                <h1 className="header-m-h1">{t('header.header-title6')}</h1>
                <p className="header-m-p">{t('header.header-title7')}</p>
                <input type="text" minLength={2} placeholder='name' onChange={(e) => setName(e.target.value)} required />
                <input type='number' minLength={2} placeholder='+998987654321' onChange={(e) => setPhone(e.target.value)} required /><br />
                <button type='submit' onClick={notify} className="header-m-button">{t('header.header-title5')}</button>
              </form>
            </Modal>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Header;
