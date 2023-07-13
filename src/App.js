import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/SignUp';

function App() {
  return (
    <div className="App">
        <Router>
            <Navigationbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/signup' component={Signup}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
