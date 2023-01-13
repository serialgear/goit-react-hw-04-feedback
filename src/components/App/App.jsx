// import React, { Component } from 'react';

import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';
import { Container } from './App.styled';
import { useState } from 'react';

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = name => {
//     this.setState(prevState => ({ [name]: prevState[name] + 1 }));
//   };

//   countTotal = () => {
//     return Object.values(this.state).reduce(
//       (previousValue, number) => previousValue + number,
//       0
//     );
//   };

//   countPositivePercentage = () => {
//     const total = this.countTotal();
//     const { good } = this.state;

//     return Math.round((good / total) * 100) || 0;
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotal();
//     const positivePercentage = this.countPositivePercentage();

//     return (
//       <Container>
//         <Section title="Fuck russia">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>

//         <Section title="Statistics">
//           {total ? (
//             <Statictics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function onLeaveFeedback(propertyName) {
    switch (propertyName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage(total, good) {
    if (!total) {
      return;
    }
    const percentage = Math.round((good / total) * 100);
    return percentage;
  }

  const total = countTotalFeedback();
  const options = ['good', 'neutral', 'bad'];

  return (
    <Container>
      <Section title="Fuck russia">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total, good)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
};

export default App;
