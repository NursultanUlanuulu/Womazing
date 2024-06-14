import React from 'react'
import style from './Staf.module.css'
import { Link } from 'react-router-dom'
import staf from '../../assets/staf.png'
import q from '../../assets/q.png'
const Staf = () => {
    return (
        <div className={style.block3}>
            <h2>Команда мечты</h2>
            <div className={style.staf}>
                <div className="">
                    <img src={staf} alt="" />
                </div>
                <div className={style.q}>
                    <img src={q} alt="" />
                </div>
                <div className="">
                    <h3>Для каждой</h3>
                    <p>Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.

                        Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.</p>
                    <p><Link to='/about'>Подробнее о бренде</Link></p>
                </div>
            </div>

        </div >
    )
}

export default Staf