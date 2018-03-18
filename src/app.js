import React from 'react';
import ReactDOM from 'react-dom';

import Example from './components/example';

import '../assets/scss/main.scss';

const App = () => (
  <div>
    <Example />
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById(`App`)
);
