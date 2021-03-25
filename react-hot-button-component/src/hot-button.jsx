import React from 'react';

class hotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
    this.i = 0;
  }

  handleClick() {
    if (this.state.isClicked === false) {
      return this.setState({ isClicked: true });
    }
    return this.setState({ isClicked: false });
  }

  handleColor(i) {
    if (i >= 3 && i < 6) { return 'blue'; }
    if (i >= 6 && i < 9) { return 'purple'; }
    if (i >= 9 && i < 12) { return 'red'; }
    if (i >= 12 && i < 15) { return 'orange'; }
    if (i >= 15 && i < 18) { return 'yellow'; }
    if (i >= 18) { return 'white'; }
  }

  render() {
    return (
      <button onClick={(this.handleClick)}
       className={(this.handleColor(this.i++))}>Hot Button</button>
    );
  }
}

export default hotButton;
