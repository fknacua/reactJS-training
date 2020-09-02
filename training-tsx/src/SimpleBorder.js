import React from 'react'

class SimpleBorder extends React.Component{
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>I am a simple {this.props.type}!</h1>
            </div>
        )
    }
}

export default SimpleBorder;