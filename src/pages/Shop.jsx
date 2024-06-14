import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../store/slices/productSlice'
import style from './Shop.module.css'
import Card from '../ui/card/Card'

const Shop = () => {
	const dispatch = useDispatch()
	const { productData } = useSelector(state => state.product)

	useEffect(() => {
		dispatch(getProduct())
	}, [])

	// console.log(productData);
	return (
		<div className={style.shop}>
			<h1>Магазин</h1>
			<ui className={style.flex}>
				{productData?.slice(0, 9).map(el => {
					return <Card key={el.id} {...el} />
				})}
			</ui>
		</div>
	)
}

export default Shop
