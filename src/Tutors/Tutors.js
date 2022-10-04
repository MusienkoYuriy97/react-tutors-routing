import React, { Component } from 'react'
import Tutor from './Tutor/Tutor'

export default class Tutors extends Component {
  state = {
    tutors: [
      { id: 1, name: 'Alina Musienko', subject: 'Speech theraphy' },
      { id: 2, name: 'Yury Musienko', subject: 'Computer Science' },
      { id: 3, name: 'Nik Kozlovski', subject: 'Barber' }
    ]
  }


  handleGoHomeButton = () => {
    this.props.history.push({
      pathname: '/'
    })
  }

  render() {
    return (
      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center'
      }}>
        <button onClick={this.handleGoHomeButton}>Go to home page</button>
        <hr />
        {this.state.tutors.map((tutor, index) => {
          return (
            <Tutor
              id={tutor.id}
              key={index}
              name={tutor.name}
              subject={tutor.subject}
            />
          )
        })}
      </div>
    )
  }
}