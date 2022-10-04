import React, { Component } from 'react'
import './App.scss'
import { Route, NavLink } from 'react-router-dom'
import About from './About/About'
import Tutors from './Tutors/Tutors'

class App extends Component {
  render() {

    return (
      <div>
        <nav className='nav'>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: '/',
                  search: '?a=1&b=2',
                  hash: 'www'
                }}
                exact
                activeClassName='wfm-active'
              >Home</NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                activeStyle={{
                  color: 'blue'
                }}
              >About</NavLink>
            </li>
            <li>
              <NavLink
                to='/tutors'
              >Tutors</NavLink>
            </li>
          </ul>
        </nav>

        <hr />

        <Route
          path='/'
          exact
          render={() => <h1 style={{ textAlign: 'center' }}>Home Page</h1>}
        />
        <Route
          path='/about'
          component={About}
        />
        <Route
          path='/tutors'
          component={Tutors}
        />
      </div>
    );
  }
}

export default App
