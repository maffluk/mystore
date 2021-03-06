import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import data from './content.json'
import Header from './components/header'
import Home from './components/home'
import GoodsList from './components/goodsList'
import Cart from './components/cart'

function App() {
  let [cart, setCart] = useState([])
  let [isOpenCart, openCart] = useState(false)

  const buy = (title, price, img) => {
    let newCart = [...cart]
    if (newCart.length === 0) {
      newCart.push({
        title,
        ammount: 1,
        price,
        img
      })
    }
    else{
      for (let i = 0; i < newCart.length; i++) {
        if (newCart[i].title === title) {
          newCart[i].ammount += 1
          newCart[i].price += price
          break
        }
        else {
          if (i === newCart.length - 1) {
            newCart.push({
              title,
              ammount: 1,
              price,
              img
            })
            break
          }
        }
      }
    }
    
    setCart(newCart)
  }

  const removeFromCart = (title) => {
    let newCart = [...cart]
    for(let i = 0; i < newCart.length; i++){
      if(newCart[i].title === title){
        newCart.splice(i, 1)
        break
      }
    }
    setCart(newCart)
  }

  return (
    <Router>
      <div className="App">
        <Header cartLength={cart.length} openCart={openCart} isOpenCart={isOpenCart}/>
        <Cart cart={cart} removeFromCart={removeFromCart} isOpenCart={isOpenCart}/>
        <Route exact path="/" render={() => <Home data={data.popular} buy={buy} />} />
        <Route path='/shoes' render={() => <GoodsList data={data.goods[0]} buy={buy} />} />
        <Route path='/jackets' render={() => <GoodsList data={data.goods[1]} buy={buy} />} />
        <Route path='/shorts' render={() => <GoodsList data={data.goods[2]} buy={buy} />} />
        <Route path='/t-shirts' render={() => <GoodsList data={data.goods[3]} buy={buy} />} />
      </div>
    </Router>
  )
}

export default App
