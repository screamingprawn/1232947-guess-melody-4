import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';

function init() {
  ReactDOM.render(
      <App />,
      document.querySelector(`#root`)
  );
}

init();
