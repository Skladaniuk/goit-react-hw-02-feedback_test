import React from 'react';
import { Component } from 'react';
import Statistics from './Statistics/statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';
import NodificationMessage from './NodificationMessage/NodificactionMessage';

export class App extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        
        
      }

      IncrementGood = () => {
        this.setState(prevState => (
            {good:prevState.good + 1 }
        ))
      }

      IncrementNeutral = () => {
        this.setState(prevState => ({
            neutral:prevState.neutral + 1
        }))
      }

      IncrementBad = () => {
        this.setState(prevState =>({
            bad:prevState.bad +1
        }))
      }
    

      countTotalFeedback = () => {
        
        return  this.state.good + this.state.neutral + this.state.bad
          }

          countPositiveFeedbackPercentage = () => {
            
            return   Math.round((this.state.good * 100)/(this.state.good + this.state.neutral + this.state.bad))
          }

  render() {
    const total = this.countTotalFeedback()
    const positiveFeedback = this.countPositiveFeedbackPercentage()
    return (
      <div>
        <SectionTitle title = 'Please leave feedback' > <FeedbackOptions onIncrementGood = {this.IncrementGood} onIncremetNeutral = {this.IncrementNeutral} onIncrementBad ={this.IncrementBad}></FeedbackOptions></SectionTitle>
       <SectionTitle title = 'Statistics'>{ total >= 1 ? <Statistics good = {this.state.good} neutral = {this.state.neutral} bad = {this.state.bad} total ={total} onPositiveFeedback ={positiveFeedback}></Statistics> : <NodificationMessage message = 'There is no feedback'></NodificationMessage>}</SectionTitle>
        
        </div>
    );
  }
}




