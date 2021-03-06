import React from 'react'

export default ({ name, buy, sizes, price, img }) =>
  (
    <div className='goods' onClick={() => buy(name, price, img)}>
      <img alt={name} src={img}/>
      <div className='sizes'>{sizes}</div>
      <div className='goodsTitle'>{name}</div>
      <div className='price'>{price}$</div>
      <div className='buyBtn'>В корзину</div>
    </div>
  )
