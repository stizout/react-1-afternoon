import React, { Component } from 'react';

class FilterObjects extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: [
                {
                    name: 'Jimmy Joe',
                    title: 'Hack0r',
                    age: 12,
                  },
                  {
                    name: 'Jeremy Schrader',
                    age: 24,
                    hairColor: 'brown'
                  },
                  {
                    name: 'Carly Armstrong',
                    title: 'CEO',
                  }
            ],
            userInput: "",
            filteredArray: [],
        }
    }

    updateUserInput(event) {
        this.setState({userInput: event.target.value})
    }

    solvedProblem(userInput) {
        var people = this.state.unFilteredArray
        var newArray = []

        for(var i = 0; i < people.length; i++){
            if( people[i].hasOwnProperty(userInput)) {
                newArray.push(people[i])
            }
        }
        this.setState({filteredArray: newArray});
        
    }
    render() {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={(event) => this.updateUserInput(event)}/>
                <button className="confirmationButton" onClick={() => this.solvedProblem(this.state.userInput)}>Filter Object</button>
                <span className="resultsBox filterObjectRB">New: {JSON.stringify(this.state.filteredArray)}</span>

            </div>
        )
    }
}

export default FilterObjects;