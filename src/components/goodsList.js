import React, { useState } from 'react'

export default ({ data: { title, content, filters } }) => {
  let [checkedFilters, setFilter] = useState(
    filters.map(({ title }) => {
      return {
        title,
        checked: []
      }
    })
  )
  let filtered = false
  console.log(checkedFilters)
  let goodsList = content.map(({ name, price, props }) => {
    return (
      <div className='goods' key={name}>
        <img alt={name} />
        {/* <div className='sizes'>{props[0].values.join(', ')}</div> */}
        <div className='goodsTitle'>{name}</div>
        <div className='price'>{price}$</div>
        <div className='buyBtn'>В корзину</div>
      </div>
    )
  })

  let filter = filters.map(({ title, variables }) => {
    return (
      <div className='filterElement'>
        <div className='filterTitle'>{title}</div>
        <div className='variables'>
          {variables.map(elem => {
            return (
              <div className='variable'>
                <input type='checkbox' onClick={() => setFilter(getNewFilter(title, elem))} name={elem} />
                <label>{elem}</label>
              </div>
            )
          })}
        </div>
      </div>
    )
  })

  const getNewFilter = (title, value) => {
    filtered = true
    return checkedFilters.map(item => {
      if (title === item.title) {
        let checkedList = [...item.checked]

        if (checkedList.includes(value)) checkedList.splice(checkedList.indexOf(value), 1)
        else checkedList.push(value)

        return {
          title: item.title,
          checked: checkedList
        }
      }
      else {
        return item
      }
    })
  }

  return (
    <div className='goodsPage'>
      <div className='filter'>{filter}</div>
      <div className='pageContent'>
        {goodsList}
      </div>
    </div>
  )
}


