import React from 'react'

export default ({ cart }) => {
	console.log(cart)
	let order = cart.map(({ title, ammount, price }) => {
		return (
			<div className='orderItem'>
				<img alt={''} />
				<div>
					<div className='itemTitle'>{title}</div>
					<div>Количество: {ammount}</div>
				</div>
				<div className='itemPrice'>{price}$</div>
			</div>
		)
	})
	return (
		<div className='openCart'>
			<div className='cartTitle'>Ваш заказ:</div>
			{order}
		</div>
	)
}