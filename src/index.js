import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';

const mistakes = 3;

function init() {
  ReactDOM.render(
      <App mistakes={mistakes}/>,
      document.querySelector(`#root`)
  );
}

init();
