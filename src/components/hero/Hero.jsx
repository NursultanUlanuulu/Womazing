import React from 'react'
import hero from '../../assets/hero.png'
import style from './Hero.module.css'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <div className={style.hero}>
            <div className={style.block}>
                <h1 className={style.text}>Новые поступления
                    в этом сезоне</h1>
                <p className={style.p}>Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.</p>
                <Link to='/shop'><button className={style.btn}>Посмотреть колекцию</button>
                </Link>
            </div>
            <div className={style.img}>
                <img src={hero} />
            </div>
        </div>
    )
}

export default Hero