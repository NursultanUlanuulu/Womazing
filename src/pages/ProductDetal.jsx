import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../store/slices/productDetalSlice'
import style from './ProductDetal.module.css'
import { addItemToBacket } from '../store/slices/backetSlice'
import heals from '../assets/img.png'
import { addItemToFavorite } from '../store/slices/favoriteSlice'
const ProductDetal = () => {
	const params = useParams()
	const dispatch = useDispatch()
	const { detalData } = useSelector(state => state.detal)
	console.log('detal', detalData)
	useEffect(() => {
		dispatch(getProductById(params.id))
	}, [params.id])

	if (Object.keys(detalData).length == 0) {
		return <h2>Loading</h2>
	}
	return (
		<div>
			<h1>{detalData.title}</h1>
			<div className={style.flex}>
				<div>
					<img src={detalData.images} width={400} />
				</div>
				<div className={style.colum}>
					<div className={style.price}>
						<h2>{detalData.price}$</h2>
						<h2 className={style.p}>{detalData.price}$</h2>
					</div>
					<div className=''>
						<h4 className={style.title}>Выберите размер</h4>
						<div>
							<button className={style.size}>S</button>
							<button className={style.size}>M</button>
							<button className={style.size}>L</button>
							<button className={style.size}>XL</button>
							<button className={style.size}>XXL</button>
						</div>
					</div>
					<div className={style.box}>
						<h4 className={style.title}>Выберите цвет</h4>
						<div className=''>
							<button
								className={style.color}
								style={{ backgroundColor: '#927876' }}
							></button>
							<button
								className={style.color}
								style={{ backgroundColor: '#D4D4D4' }}
							></button>
							<button
								className={style.color}
								style={{ backgroundColor: '#FD9696' }}
							></button>
							<button
								className={style.color}
								style={{ backgroundColor: '#FDC796' }}
							></button>
						</div>
					</div>
					<div className={style.iconFlex}>
						<div className={style.imgHover}>
							<img
								src={heals}
								width={40}
								onClick={() => {
									dispatch(addItemToFavorite(detalData))
								}}
							/>
						</div>
						<div>
							<button
								className={style.backet}
								onClick={() => {
									dispatch(addItemToBacket(detalData))
								}}
							>
								добавть в корзину
							</button>
						</div>
					</div>

					{/* {detalData.images.map(el => {
                        return (
                            <img src={el} height={80} />
                        )
                    })} */}
				</div>
			</div>
		</div>
	)
}

export default ProductDetal
