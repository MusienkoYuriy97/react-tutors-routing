import React from 'react'
import './Tutor.scss'


const Tutor = props => {
  return (
    <div className={'Tutor'}>
      <h3>{props.name}</h3>
      <p>{props.subject}</p>
    </div>
  )
}

export default Tutor