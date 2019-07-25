import React, { useState } from 'react'
import GoodsCard from './goodsCard'
import Filter from './filter'

export default ({ data: { title, content, filters }, buy }) => {

  let [checkedFilters, setFilter] = useState(
    filters.map(({ title }) => {
      return {
        title,
        checked: []
      }
    })
  )

  let goodsList = content.map(({ name, price, props, img }) => {
    let el = <GoodsCard name={name} buy={buy} sizes={props[0].values.join(', ')} price={price} img={img} />

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
              if (i === props[j].values.length - 1) arr.push(false)
            }
          }
        }
      }
    }

    if (arr.every(item => item === true)) return el

    return null
  })

  let filter = filters.map(({ title, variables }) => <Filter title={title} variables={variables} setFilter={setFilter} checkedFilters={checkedFilters} />)

  return (
    <div className='goodsPage'>
      <div className='filter'>{filter}</div>
      <div className='pageContent'>
        {goodsList}
      </div>
    </div>
  )
}


