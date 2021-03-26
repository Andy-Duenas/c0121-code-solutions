import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
    event.target.reset();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label> Email:
          <input type="text" onChange={this.handleChange} />
        </label>
        <input type="submit"/>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm/>,
  document.querySelector('#root')
);
