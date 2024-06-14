import React from 'react'
import style from './Footer.module.css'
import m from '../../../assets/m.png'
import n from '../../../assets/n.png'
import b from '../../../assets/b.png'
import visa from '../../../assets/visa.png'
const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.food}>
                <ul>
                    <li>© Все права защищены</li>
                    <li>Политика конфиденциальности</li>
                    <li>Публичная оферта</li>
                </ul>
            </div>
            <div className={style.num}>
                <ul>
                    <li>+7 (495) 823-54-12</li>
                    <li>hello@womazing.com</li>
                </ul>
                <div className={style.icon}>
                    <img src={n} alt="" />
                    <img src={b} alt="" />
                    <img src={m} alt="" />
                </div>

                <div className={style.visa}>
                    <img src={visa} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Footer