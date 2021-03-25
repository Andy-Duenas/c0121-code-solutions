import React from 'react';

class hotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.setState({ count: this.state.count + 1 });
  }

  handleColor() {
    if (this.state.count >= 3 && this.state.count < 6) { return 'blue'; }
    if (this.state.count >= 6 && this.state.count < 9) { return 'purple'; }
    if (this.state.count >= 9 && this.state.count < 12) { return 'red'; }
    if (this.state.count >= 12 && this.state.count < 15) { return 'orange'; }
    if (this.state.count >= 15 && this.state.count < 18) { return 'yellow'; }
    if (this.state.count >= 18) { return 'white'; }
  }

  render() {
    const color = this.handleColor();
    return (
      <button onClick={this.handleClick}
        className={color}>Hot Button</button>
    );
  }
}

export default hotButton;
