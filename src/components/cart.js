import React from 'react'

export default ({ cart, removeFromCart }) => {
	let totalPrice = 0
	let order = cart.map(({ title, ammount, price, img }) => {
		totalPrice += price
		return (
			<div className='orderItem' key={title}>
				<img alt={title} src={img} />
				<div>
					<div className='itemTitle'>{title}</div>
					<div>Количество: {ammount}</div>
				</div>
				<div className='itemPrice'>
					<div className='removeFromCart' onClick={() => removeFromCart(title)}></div>
					{price}$
				</div>
			</div>
		)
	})

	const handleClick = () => {
		if(cart.length === 0){
			return alert('Вы ничего не заказали')
		}
		alert(`Сумма заказа: ${totalPrice}$
Спасибо, что выбрали наш магазин :) `)
	}

	return (
		<div className='openCart'>
			<div className='cartTitle'>Ваш заказ:</div>
			{order}
			<div className='cartFooter'>
				<div>Сумма заказа: {totalPrice}</div>
				<div className='checkout' onClick={handleClick}>Оформить заказ</div>
			</div>
		</div>
	)
}