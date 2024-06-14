import { useState } from 'react'
import style from './Auth.module.css'
import { useDispatch } from 'react-redux'
import { createUser } from '../store/slices/userSlice'
const Auth = ({ setIsVithible }) => {
	const [userData, setUserData] = useState({
		email: '',
		password: '',
		name: '',
		error: '',
	})
	const dispatch = useDispatch()

	const handleChange = e => {
		const { name, value } = e.target
		setUserData({ ...userData, [name]: value })
	}
	const handleSubmit = e => {
		e.preventDefault()
		console.log(userData)
		dispatch(createUser(userData))
	}
	return (
		<div
			className={style.ouerlay}
			onClick={e => {
				let authDiv = e.target.closest('#test')
				if (!authDiv) setIsVithible(false)
				if (authDiv.classList.value === style.auth) {
					return
				}
			}}
		>
			<div className={style.auth} id='test'>
				<form onSubmit={handleSubmit}>
					<p>
						<input
							onChange={handleChange}
							type='email'
							placeholder='Enter email'
							name='email'
						/>
					</p>
					<p>
						<input
							onChange={handleChange}
							type='password'
							placeholder='Enater password'
							name='password'
						/>
					</p>
					<p>
						<input
							onChange={handleChange}
							type='name'
							placeholder='Enter name'
							name='name'
						/>
					</p>
					<p>
						<input
							onChange={handleChange}
							type='text'
							placeholder='Save avatar'
							name='avatar'
						/>
					</p>
					<p>
						<input type='submit' value={'Create an account'} />
					</p>
				</form>
			</div>
		</div>
	)
}

export default Auth
