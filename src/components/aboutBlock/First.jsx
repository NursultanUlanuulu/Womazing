import React from 'react'
import second from '../../assets/second.png'
import style from './First.module.css'
const First = () => {
    return (
        <div className={style.first}>
            <div>
                <img src={second} alt="" />
            </div>
            <div className={style.text}>
                <h3>Идея и женщина</h3>
                <p className={style.p}>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.
                </p>
                <p className={style.p}>  Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. </p>
            </div>
        </div>
    )
}

export default First