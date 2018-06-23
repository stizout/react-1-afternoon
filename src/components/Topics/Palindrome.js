import React, { Component } from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: "",
            palindrome: '',
        }
    }

    updateUserInput(event) {
        this.setState({userInput: event.target.value})
    }

    checkPalindrome(userInput) {
        const normal = userInput
        const lowerCase = normal.toLowerCase();
        const reverse = lowerCase.split('').reverse();
        const final = reverse.join('');
        console.log(normal, final)

        if(normal === final) {
            this.setState({palindrome: 'true'})
        } else {
            this.setState({palindrome: 'false'})
        }

    }

    render() {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(event) => {this.updateUserInput(event)}} />
                <button className="confirmationButton" onClick={() => this.checkPalindrome(this.state.userInput)}>Submit</button>
                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>

            </div>
        )
    }
}

export default Palindrome;