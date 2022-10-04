import React from 'react'

export default class TutorDetail extends React.Component {
    render () {
        console.log(this.props);
        return (
            <div style={{textAlign : 'center'}}>
                <h1>{this.props.match.params.id}</h1>
            </div>
        )
    }
}