import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React, { Component } from 'react'

import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';

class App extends Component {

  render() {

    const cards = [
      {
        name: 'Detergente',
        price: '3.4',
      },
      {
        name: 'Sabão em pó AMO',
        price: '5.0',
      },
      {
        name: 'Vassoura de palha',
        price: '17.0',
      },
      {
        name: 'Amaciante',
        price: '4.0',
      },
      {
        name: 'Esponja de louça',
        price: '3.78',
      },
      {
        name: 'Vassoura de palha',
        price: '17.0',
      },
    ]

    const loginPageH1 = 'Interface de login !'
    const signupPageH1 = 'Criar nnova conta !'

    return (
      <div className="App">
        <Router>
          <Navigationbar />
          <Switch>
            <Route exact path='/' render={(props) => <Home {...props} cardsData={cards} />} />
            <Route path='/login' render={(props) => <Login {...props} pageData={loginPageH1} />} />
            <Route path='/signup' render={(props) => <Signup {...props} pageData={signupPageH1} />} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
