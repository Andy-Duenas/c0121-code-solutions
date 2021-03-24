import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>{props}</button>;
}

ReactDOM.render(
  CustomButton('Click Me!'),
  document.getElementById('root')
);
