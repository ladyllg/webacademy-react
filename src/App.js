import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React, { Component } from 'react'
import { useState } from 'react';

import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';

import storeData from './components/data/storeData.json'

class App extends Component {

  state = {
    cartData: [],
    products: storeData,
    cartIsActive: false,
    name: "teste"
  }

  removeProduct = (index) => {
    const { cartData } = this.state
    this.setState({
      cartData: cartData.filter((product, id) => {
        return id !== index
      }),
    })
    if (cartData.length <2){
      this.setState({name: "chegou"});
      this.setState({cartIsActive: false});
    } else {
      this.setState({cartIsActive: true});
    }
  }

  addProducts = (index) => {
    const { cartData } = this.state    
    const item = storeData[index-1]
    
    this.setState(prevState => ({
      cartData: [...prevState.cartData, {"id": item.id, "name": item.name, "price": item.price}]
    }))

    this.setState({cartIsActive: true});
  }


  render() {

    const { cartData, products, cartIsActive } = this.state

    const loginPageH1 = 'Interface de login !'
    const signupPageH1 = 'Criar nnova conta !'

    return (
      <div className="App">
        <Router>
          <Navigationbar cartData={cartData} removeProduct={this.removeProduct} cartIsActive={cartIsActive}/>
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} cardsData={products} addProducts={this.addProducts} />} />
            <Route path='/login' render={(props) => <Login {...props} pageData={loginPageH1} />} />
            <Route path='/signup' render={(props) => <Signup {...props} pageData={signupPageH1} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
