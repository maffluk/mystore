import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom"
import data from './content.json'
import Header from './components/header'
import Home from './components/home'
import GoodsList from './components/goodsList'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}/>
        <Route path='/shoes' render={() => <GoodsList data={data.goods[0]}/>} />
        <Route path='/jackets' render={() => <GoodsList data={data.goods[1]}/>} />
        <Route path='/shorts' render={() => <GoodsList data={data.goods[2]}/>} />
        <Route path='/t-shirts' render={() => <GoodsList data={data.goods[3]}/>} />
      </div>
    </Router>
  )
}

export default App
