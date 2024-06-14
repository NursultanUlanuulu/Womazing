import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import style from './Backet.module.css'
import { actions } from '../store/slices/backetSlice'
import x from '../assets/x.png'

const Backet = () => {
    const dispatch = useDispatch()
    const { backetData } = useSelector(state => state.backet)
    const total = backetData.reduce((total, el) => {
        return (total + el.price * el.count)
    }, 0)
    return (
        <div>
            <h1>Корзина</h1>
            <div className={style.option}>
                <h4 className={style.titi}>Товар</h4>
                <h4 className={style.tit}>Цена</h4>
                <h4 className={style.tit}>Количество</h4>
                <h4 className={style.tit}>Всего : <span>{total}$</span></h4>
            </div>
            {backetData.map(el => {
                return (
                    <>
                        <div className={style.detal}>
                            <div className={style.img}>
                                <img src={el.images} width={136} height={150} />
                                <p>{el.title}</p>
                            </div>
                            <div className={style.price}>
                                <p>{el.price * el.count}$</p>
                            </div>
                            <div className={style.count}>
                                <button
                                    onClick={() => {
                                        if (el.count > 1) {
                                            dispatch(actions.decrementCount(el.id))
                                        }
                                    }
                                    }
                                >-</button>
                                <span>{el.count}</span>
                                <button onClick={() => dispatch(actions.incrementCount(el.id))}>+</button>
                            </div>

                            <img src={x}
                            onClick={()=>dispatch(actions.delateItem(el.id))} />
                        </div>
                    </>
                )
            })
            }
        </div>
    )
}

export default Backet