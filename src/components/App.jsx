import React, { Component } from 'react';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = () => {
    const count = Object.keys(this.state).reduce((total, key) => {
      return total + this.state[key];
    }, 0);
    return count;
  };

  countPositiveFeedbackPercentage = () => {
    const percentageOfPositiveFeedback = Math.round(
      (this.state['good'] * 100) / this.countTotalFeedback()
    );
    return percentageOfPositiveFeedback || 0;
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          {Object.keys(this.state).map(key => (
            <button key={key} onClick={() => this.handleClick(key)}>
              {key}
            </button>
          ))}
        </div>
        <h2>Statistics</h2>
        <div>
          {Object.keys(this.state).map(key => (
            <div key={key}>
              {key}: {this.state[key]}
            </div>
          ))}
        </div>
        <div>Total: {this.countTotalFeedback()}</div>
        <div>Positive fidback: {this.countPositiveFeedbackPercentage()}%</div>
      </div>
    );
  }
}
