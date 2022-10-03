import React, {Component} from 'react'
import './App.scss'
import {Route} from 'react-router-dom'
import About from './About/About'
import Tutors from './Tutors/Tutors'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/tutors">Tutors</a>
            </li>
          </ul>
        </nav>

        <hr/>

        <Route path="/" exact render={() => <h1 style={{ textAlign: 'center'}}>Home Page</h1>} />
        <Route path="/about" exact component={About} />
        <Route path="/tutors" exact component={Tutors} />
      </div>
    );
  }
}

export default App
