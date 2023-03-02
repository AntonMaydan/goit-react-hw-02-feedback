import React, { Component } from 'react';
import css from './App.module.css';

import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";


export class App extends Component {
   state = {
        good: 0,
        neutral: 0,
        bad: 0
    }   

    onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };
  
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
  };

    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return total > 0 ? Math.round((good / total) * 100) : 0;
  };
    
    
  render() {
    const options = Object.keys(this.state);
    
        return (
            <div className={css.container}>
              <Section title="Please leave feedback">
                <FeedbackOptions
                    options={options}
                    onLeaveFeedback={this.onLeaveFeedback}
                />
              </Section>
            
            <Section title="Statistics">
                 {this.countTotalFeedback() > 0 ? (
                    <Statistics 
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage = {this.countPositiveFeedbackPercentage()}
                  />
                        ) : (
                   <Notification
                       message="There is no feedback" />
                  )}
             </Section>
            </div>
        );
        
    }
  };

