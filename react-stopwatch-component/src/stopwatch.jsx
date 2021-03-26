/* eslint-disable no-console */
import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPaused: true, count: 0 };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    if (this.state.isPaused) {
      this.id = setInterval(() => this.setState({ count: this.state.count + 1 }), 1000);
      return this.setState({ isPaused: false });
    }
    clearInterval(this.id);
    return this.setState({ isPaused: true });
  }

  handleReset() {
    if (this.state.isPaused) {
      this.setState({ count: 0 });
    }
  }

  handleIcon() {
    if (this.state.isPaused) {
      return 'fas fa-play icon';
    }
    return 'fas fa-pause icon';
  }

  render() {
    const play = this.handleIcon();
    return (
      <div className="container">
        <div className="circle" onClick={this.handleReset}>
          <p>{this.state.count}</p>
        </div>
        <div className="play-row">
          <i className={play} onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}

export default StopWatch;
