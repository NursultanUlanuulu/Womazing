import style from './Card.module.css'
import { useNavigate } from 'react-router-dom'
const Card = ({ id, title, image, price, category }) => {
	const navigate = useNavigate()
	return (
		<div onClick={() => navigate(`/productDetal/${id}`)}>
			<div className={style.card}>
				<img src={category.image} alt='' className={style.img} />
				<h4 className={style.title}>{title}</h4>
				<p className={style.price}>{price}$</p>
			</div>
		</div>
	)
}

export default Card
