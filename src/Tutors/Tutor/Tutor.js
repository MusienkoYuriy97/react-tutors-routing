import React from 'react'
import './Tutor.scss'
import { withRouter } from 'react-router-dom'


const Tutor = props => {
  return (
    <div
      className={'Tutor'}
      onClick={() => {
        props.history.push({
          pathname: '/tutors/' + props.id,
        }
        )
      }}
    >
      <h3>{props.name}</h3>
      <p>{props.subject}</p>
    </div >
  )
}

export default withRouter(Tutor)