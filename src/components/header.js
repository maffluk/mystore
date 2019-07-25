import React from 'react'
import { Link } from "react-router-dom"
import Menu from './menu'
// import data from '../content.json'


export default ({ cartLength, openCart, isOpenCart }) =>
  (
    <header>
      <Link to='/'>
        <div className='storeTitle'>MyStore</div>
      </Link>

      <Menu />

      <div className='cart' onClick={() => openCart(!isOpenCart)}>
        {cartLength === 0 ? null : <div className='cartLength'>{cartLength}</div>}
      </div>
    </header>
  )
