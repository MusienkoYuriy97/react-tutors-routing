import React, { Component } from 'react'
import './App.scss'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import About from './About/About'
import Tutors from './Tutors/Tutors'
import TutorDetail from './Tutors/TutorDetail/TutorDetail'

class App extends Component {
  state = {
    isLoggedId: false
  }

  render() {
    return (
      <div>
        <nav className='nav'>
          <ul>
            <li>
              <NavLink to={{ pathname: '/' }} exact activeClassName='wfm-active'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about' activeStyle={{ color: 'blue' }}>About</NavLink>
            </li>
            <li>
              <NavLink to='/tutors'>Tutors</NavLink>
            </li>
          </ul>
        </nav>

        <hr />
        <div style={{ textAlign: 'center' }}>
          <h3>Is logged in {this.state.isLoggedId.toString()}</h3>
          <button onClick={() => this.setState({ isLoggedId: true })}>Login</button>
        </div>
        <hr />
        <Switch>
          <Route path='/' exactrender={() => <h1 style={{ textAlign: 'center' }}>Home Page</h1>} />
          {this.state.isLoggedId ?
            <React.Fragment>
              <Route path='/about' component={About} />
              <Route path='/tutors/:id' component={TutorDetail} />
              <Route path='/tutors' component={Tutors} />
            </React.Fragment> : null}
          <Redirect to={'/'} />
        </Switch>
      </div>
    );
  }
}

export default App
