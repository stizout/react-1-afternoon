import React, { Component } from 'react';

class EvenAndOdds extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput:  "",
        }
    }
    updateUserInput(event) {
       this.setState({userInput: event.target.value}) 
    }

    assignEvenandOdd(userInput) {
        var arr = userInput.split(',')
        var evens = []
        var odds = []

        for(var i = 0; i < arr.length; i++){
            if(arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10))
            } else {
                odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({evenArray: evens, oddArray: odds})
    }
    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
            <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(event) => {this.updateUserInput(event)}}/>
                <button className="confirmationButton" onClick={() => {this.assignEvenandOdd(this.state.userInput)}}>Split</button>
                <span className="resultsBox">Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}

export default EvenAndOdds;
