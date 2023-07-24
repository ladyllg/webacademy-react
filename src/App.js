import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React, { useState, useEffect } from 'react';

import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';
import Productform from './components/ProductForm'

import axios from "axios";
import storeData from './components/data/storeData.json'


function App() {

  const [cartData, setCartData] = useState([])
  const [products, setProducts] = useState([])
  const [cartIsActive, setCartIsActive] = useState(false)

  const loginPageH1 = 'Login Page'
  const signupPageH1 = 'Signup´Page'

  const baseURL = "https://my-json-server.typicode.com/ladyllg/web-academy-db/products";

  const removeProduct = (index) => {
    setCartData(cartData =>
      cartData.filter((product, id) => {
        return id !== index
      }),
    )
    if (cartData.length < 2) {
      setCartIsActive(false);
    } else {
      setCartIsActive(true);
    }
  }

  const addProducts = (index) => {
    const item = products[index - 1]
    setCartData(cartData => [...cartData, { "id": item.id, "name": item.name, "price": item.price }])
    setCartIsActive(true);

  }

  const addProductToHome = (formData) => {
    const id = storeData.length - 1
    console.log("item", formData, "id", id)
    setProducts(products => [...products, { "id": id, "name": formData.name, "price": formData.price }])
  }

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setProducts(response.data);
    });
  }, []);

  if (!products) return null;

  return (
    <div className="App">
      <Router>
        <Navigationbar cartData={cartData} removeProduct={removeProduct} cartIsActive={cartIsActive} />
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} cardsData={products} addProducts={addProducts} />} />
          <Route path='/login' render={(props) => <Login {...props} pageData={loginPageH1} />} />
          <Route path='/signup' render={(props) => <Signup {...props} pageData={signupPageH1} />} />
          <Route path='/products/add' render={(props) => <Productform addNewProductToHome={addProductToHome} />} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
