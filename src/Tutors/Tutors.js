import React, {Component} from 'react'
import Tutor from './Tutor/Tutor'

export default class Tutors extends Component {
  state = {
    tutors: [
      {name: 'Alina Musienko', subject: 'Speech theraphy'},
      {name: 'Yury Musienko', subject: 'Computer Science'},
      {name: 'Nik Kozlovski', subject: 'Barber'}
    ]
  }

  render() {
    return (
      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px'
      }}>
        {this.state.tutors.map((tutor, index) => {
          return (
            <Tutor
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