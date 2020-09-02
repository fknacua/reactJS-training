import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNum: 0,
            counter: 0
        };
    }

    render(){
        return (
            <div>
                Random Number(4000-5000): {this.state.randomNum} 
                <br/>
                Display 0 for numbers multiples of 5: {this.state.counter % 5 ? this.state.counter : 0} 
            </div>
        )
    }

    componentDidMount() {
        this.timerID = setInterval(
                () => this.tick(), 
                1000
            );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            randomNum: this.getRandomNumber(),
            counter: this.state.counter += 1
        })

    }

    getRandomNumber() {
        return Math.floor(Math.random() * (5000 - 4000)) + 4000;
    }

}

export default Clock;