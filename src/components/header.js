import React  from 'react'
import { Link } from "react-router-dom"
import Menu from './menu'
// import data from '../content.json'


export default () => {
  // useEffect(() => {
  //   if(document.getElementsByClassName('searchResult')[0] !== undefined){
  //     document.getElementsByClassName('searchResult')[0].style.left = document.getElementsByClassName('appSearch')[0].offsetLeft + 'px'
  //     document.getElementsByClassName('searchResult')[0].style.display = 'block'
  //   }
  // })

  // let [searchQuery, search] = useState('')
  // let searchResult = []
  // if (searchQuery !== '') {
  //   data.goods.forEach(elem => {
  //     elem.content.forEach(item => {
  //       if (item.name.toLowerCase().includes(searchQuery.toLowerCase())) {
  //         searchResult.push(item.name)
  //       }
  //     })
  //   })
  //   searchResult = (
  //     <div className='searchResult' tabIndex={0}>
  //       {searchResult.map(item => {
  //         return (
  //           <div>
  //             {item}
  //           </div>
  //         )
  //       })}
  //     </div>
  //   )
  // }
  // const handleBlur = e => {
  //   if (e.relatedTarget === null) dispatch({ type: 'CLEAR_SEARCH' })
  // } 
  return (
    <header>
      <Link to='/'>
        <div className='storeTitle'>MyStore</div>
      </Link>
      {/* <div className='appSearch'>
        <input value={searchQuery} onChange={(e) => search(e.target.value)} />
        {searchQuery !== '' ? searchResult : null}
      </div> */}
      <Menu />
      <div className='cart'></div>
    </header>
  )
}