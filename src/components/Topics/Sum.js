import React, { Component } from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            num1: 0,
            num2: 0,
            sum: 0,
        }
    }

    compareFirst(num1) {
        this.setState({num1: parseInt(num1, 10)})
    }

    compareSecond(num2) {
        this.setState({num2: parseInt(num2, 10)})
    }

    addThem() {
        console.log(this.state.num1, this.state.num2)
        this.setState({sum: this.state.num1 + this.state.num2})
        console.log(this.state.sum)
    }
        
    render() {
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum Me!</h4>
                <input className="inputLine" onChange={(event) => this.compareFirst(event.target.value)}/>
                <input className="inputLine" onChange={(event) => this.compareSecond(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.addThem()}>Sum</button>
                <span className="resultsBox"></span>

            </div>
        )
    }
}

export default Sum;