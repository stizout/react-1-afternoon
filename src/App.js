import React, { Component } from 'react';
import './index.css';
import TopicBrowser from './components/TopicBrowser/TopicBrowser'
import EvenAndOdds from './components/Topics/EvenAndOdd';
import FilterObject from './components/Topics/FilterObject';
import FilterString from './components/Topics/FilterString';
import Palindrome from './components/Topics/Palindrome';
import Sum from './components/Topics/Sum';

class App extends Component {
  render() {
    return (
      <div>
        <TopicBrowser />
        <EvenAndOdds />
        <FilterObject />
        <FilterString />
        <Palindrome />
        <Sum />
      </div>
      
    )
  }
}

export default App;
