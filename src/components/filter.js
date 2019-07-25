import React from 'react'

export default ({ title, variables, checkedFilters, setFilter }) => {
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
}