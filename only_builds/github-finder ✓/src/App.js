import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './Component/layout/Navbar';
import User from './Component/users/User'
import Home from './Component/Pages/Home'
import Alert from './Component/layout/Alert'
import About from './Component/Pages/About'
import './App.css';
import GithubState from './Context/github/GithubState'
import AlertState from './Context/alert/AlertState'
import NotFound from './Component/Pages/NotFound'
const App = () => {
  return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar />
              <div className='container'>
                <Alert/>
                <Switch >
                {/* <Route exact path={['/','/home','/abcd']} component={Home}/> */}
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound}/>
                </Switch>
                
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    ); 
  }

export default App; 
