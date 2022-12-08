import { Component } from "react";
import { FeedbackOptions } from "./feedback-options/FeedbackOptions";
import { FeddbackSection } from "./feedback-section/Section";
import { GlobalStyle } from "./GlobalStyle.styled";
import { Statistics } from "./statistics/Statistics";

// export const App = () => {
  export class App extends Component{
   state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  render(){
    const { good, neutral, bad} = this.state;
    return(<>
    <GlobalStyle />
    <FeddbackSection title={"Please leave feedback"}>
      <FeedbackOptions options={this.state} onLeaveFeedback={'no'}></FeedbackOptions>
      <Statistics good={good} neutral={neutral} bad={bad} total={0} positivePercentage={0}></Statistics> 
    </FeddbackSection>
  </>
    )
  };
};
