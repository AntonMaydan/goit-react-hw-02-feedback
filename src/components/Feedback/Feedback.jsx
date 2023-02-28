import React from "react";
import { Statistics } from "components/Statistics/Statistics";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";

export class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }   

    handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

   handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
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
    
    
    render () {
        return (
            <>
                <h2>React homework template</h2>
                


                <FeedbackOptions 
                    good={this.handleGood}
                    neutral={this.handleNeutral}
                    bad={this.handleBad}
                />
               
                <h2>Statistics</h2>
                <Statistics 
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.countTotalFeedback()}
                    positivePercentage = {this.countPositiveFeedbackPercentage()}
                />
            </>
        );
        
    }
  };

  