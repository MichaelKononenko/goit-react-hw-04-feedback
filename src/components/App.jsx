import { Component } from "react";
import { FeedbackOptions } from "./feedback-options/FeedbackOptions";
import { FeddbackSection } from "./feedback-section/Section";
import { GlobalStyle } from "./GlobalStyle.styled";
import { Statistics } from "./statistics/Statistics";

export class App extends Component{
   state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  render(){
    const { good, neutral, bad} = this.state;
    return(<>
    <GlobalStyle />
    <FeddbackSection title={"Please leave feedback"}>
      <FeedbackOptions options={this.state} onLeaveFeedback={this.clickHandling.bind(this)}></FeedbackOptions>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad} 
        total={this.countTotalFeedbacks()} 
        positivePercentage={this.countPositivePersentage()}>
      </Statistics> 
    </FeddbackSection>
  </>
    )
  };

  countTotalFeedbacks(){
    const { good, neutral, bad} = this.state;
    return good + neutral + bad;
  }

  countPositivePersentage(){
    const { good } = this.state;
    return Math.round(good / (this.countTotalFeedbacks() / 100) );
  }

  clickHandling(item){
    this.setState(prevState => ({[item]: prevState[item] + 1 }));
  }

};
