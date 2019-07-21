import React from 'react'
import { NavLink } from "react-router-dom"

export default () => {
  return (
    <div className='mainMenu'>
      <NavLink activeClassName="selected" to='/shoes'>Обувь</NavLink>
      <NavLink activeClassName="selected" to='/jackets'>Куртки</NavLink>
      <NavLink activeClassName="selected" to='/shorts'>Шорты</NavLink>
      <NavLink activeClassName="selected" to='/t-shirts'>Футболки</NavLink>
    </div>
  )
}