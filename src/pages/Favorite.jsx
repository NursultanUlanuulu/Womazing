import React from 'react'
import style from './Favorite.module.css'
import { useDispatch, useSelector } from 'react-redux'
import x from '../assets/x.png'
import { actions } from '../store/slices/favoriteSlice'

const Favorite = () => {
    const dispatch = useDispatch()
    const { favoriteData } = useSelector(state => state.favoirte)
    const total = favoriteData.reduce((total, el) => {
        return (total + el.price * el.count)
    },0)
    return (
        <div>
            <h1>Любимые</h1>
            <div className={style.option}>
                <h4 className={style.titi}>Товар</h4>
                <h4 className={style.tit}>Цена</h4>
                <h4 className={style.tit}>Всего :{total}$</h4>
            </div>
            {favoriteData.map(el => {
                return (
                    <div className={style.detal}>
                        <div className={style.img}>
                            <img src={el.images} width={136} height={150} />
                            <p>{el.title}</p>
                        </div>
                        <div className={style.price}>
                            <p>{el.price}$</p>
                        </div>
                        <img src={x} 
                        onClick={()=>{dispatch(actions.delateItem(el.id))}}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Favorite