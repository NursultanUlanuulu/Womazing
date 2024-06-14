import React from 'react'
import style from './Contacts.module.css'
const Contacts = () => {
  return (
    <div>
        <h1>Контакты</h1>
        <div className={style.cards}>
            <div className={style.card}>
                <p>Телефон</p>
                <h4>+7 (495) 823-54-12</h4>
            </div>
            <div>
                <p>E-mail</p>
                <h4>+info@sitename.com</h4>
            </div>
            <div>
                <p>Адрес</p>
                <h4>+г. Москва, 3-я улица Строителей, 25</h4>
            </div>
            
        </div>
    </div>
  )
}

export default Contacts