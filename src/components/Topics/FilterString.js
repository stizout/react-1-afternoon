import React, { Component } from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unFilteredArray: ['James', 'Jessica', 'Melody', 'Tyler', 'Blake', 'Jennifer', 'Mark', 'Maddy'],
            userInput: "",
            filteredArray: [],
        }
    }

    updateUserInfo(event) {
        this.setState({userInput: event.target.value})
    }

    filteredString(userInput) {
        var names = this.state.unFilteredArray
        var newArray = []
        
        for(var i = 0; i < names.length; i++) {
            if(names[i].includes(userInput)) {
                newArray.push(names[i])
            }
        }
        this.setState({filteredArray: newArray})
    }

    render() {
        return (
            <div className=" puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
                <input className="inputLine" onChange={(event) => this.updateUserInfo(event)}/>
                <button className="confirmationButton" onClick={() => this.filteredString(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Array: {JSON.stringify(this.state.filteredArray)}</span>

            </div>
        )
    }
}

export default FilterString;