import React from 'react';

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isOn) {
      return this.setState({ isOn: false });
    }
    return this.setState({ isOn: true });
  }

  handleSwitch() {
    if (this.state.isOn) {
      return 'is-On';
    }
    return 'is-Off';
  }

  render() {
    const newClassName = this.handleSwitch();
    return (
      <div className="container">
        <div className={newClassName}>
          <button onClick={this.handleClick} className={newClassName}></button>
        </div>
       <span >{this.state.isOn === true ? 'On' : 'Off'}</span>
      </div>
    );
  }
}

export default ToggleButton;
