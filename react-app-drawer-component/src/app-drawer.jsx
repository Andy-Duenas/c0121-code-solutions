import React from 'react';

class Drawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isShowingMenu: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { isShowingMenu } = this.state;
    if (isShowingMenu) {
      return this.setState({ isShowingMenu: false });
    }
    return this.setState({ isShowingMenu: true });
  }

  render() {
    if (this.state.isShowingMenu) {
      return (
      <>
        <div className='container'>
          <div className="menu-container">
            <h2 className="menu-title">Menu</h2>
            <h3 className="menu-item" onClick={this.handleClick}>About</h3>
            <h3 className="menu-item" onClick={this.handleClick}>Get Started</h3>
            <h3 className="menu-item" onClick={this.handleClick}>Sign In</h3>
          </div>
          <div className="grey-screen" onClick={this.handleClick}></div>
        </div>
      </>);
    }
    return <i className='fas fa-bars icon' onClick={this.handleClick}></i>;
  }
}

export default Drawer;
