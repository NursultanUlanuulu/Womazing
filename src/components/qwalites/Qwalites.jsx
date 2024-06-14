import React from 'react'
import card from '../../assets/card.png'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import style from './Qwalites.module.css'
const Qwalites = () => {
  return (
    <div className={style.qwalites}>
        <h1>Что для нас важно</h1>
        <div className={style.cards}>
            <div className={style.card}>
                <img src={card} />
                <h3>Качество</h3>
                <p>Наши профессионалы работают на лучшем оборудовании для пошива одежды беспрецедентного качества</p>
            </div>
            <div className={style.card}>
                <img src={card1} />
                <h3>Скорость</h3>
                <p>Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах</p>
            </div>
            <div className={style.card}>
                <img src={card2} />
                <h3>Ответственность</h3>
                <p>Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing</p>
            </div>
        </div>
    </div>
  )
}

export default Qwalites