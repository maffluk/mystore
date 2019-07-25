import React from 'react'
import GoodsCard from './goodsCard'

export default ({data, buy}) => {
  let list = data.map(({name, price, img, props}) => <GoodsCard key={name} name={name} buy={buy} sizes={props[0].values.join(', ')} price={price} img={img} />)

  return(
    <div className='homePage'>
      <div className='pageTitle'>Популярные товары</div>
      <div className='pageContent'>
        {list}
      </div>
    </div>
  )
}