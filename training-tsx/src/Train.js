import React from 'react'
import SimpleBorder from './SimpleBorder'

class Train extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ctr: 0
        }
        console.log(this);
    }

    componentWillMount() {
        //debugger;
        console.log("component will be mounted here")
        this.setState({
            ctr: 1
        })
    }
    
    render() {
        //debugger
        return (
            <div>
                <h1>Counter: {this.state.ctr} </h1>
                <SimpleBorder type="border"/>
            </div>
        )
    }

    componentDidMount() {
        //debugger;
        console.log("component mounted here")
        this.setState({
            ctr: 2
        })
    }
}

export default Train;
