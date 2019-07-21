import React, { useState } from 'react'

export default ({ data: { title, content, filters }, buy }) => {
  let [checkedFilters, setFilter] = useState(
    filters.map(({ title }) => {
      return {
        title,
        checked: []
      }
    })
  )
  let goodsList = content.map(({ name, price, props }) => {
    let el = (
      <div className='goods' key={name} onClick={() => buy(name, price)}>
        <img alt={name} />
        <div className='sizes'>{props[0].values.join(', ')}</div>
        <div className='goodsTitle'>{name}</div>
        <div className='price'>{price}$</div>
        <div className='buyBtn'>В корзину</div>
      </div>
    )

    let arr = []
    outer: for (let p = 0; p < checkedFilters.length; p++) {
      for (let j = 0; j < props.length; j++) {
        if (checkedFilters[p].title === props[j].title && checkedFilters[p].checked.length !== 0) {
          for (let i = 0; i < props[j].values.length; i++) {
            if (checkedFilters[p].checked.includes(props[j].values[i])) {
              arr.push(true)
              continue outer
            }
            else {
              if(i === props[j].values.length - 1){
                arr.push(false)
              }
            }
          }
        }
      }
    }
    if (arr.every(el => el === true)) {
      return el
    }
    return null
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


