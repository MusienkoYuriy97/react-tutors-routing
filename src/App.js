import React, { Component } from 'react'
import './App.scss'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import About from './About/About'
import Tutors from './Tutors/Tutors'
import TutorDetail from './Tutors/TutorDetail/TutorDetail'

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

        <Switch>
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
            path='/tutors/:id'
            component={TutorDetail}
          />
          <Route
            path='/tutors'
            component={Tutors}
          />
          <Redirect to={'/'} />
          {/* <Route
            render={() => <h1 style={{ textAlign: 'center', color: 'red' }}>404</h1>}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default App
