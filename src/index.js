import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';
import questions from './mocks/questions.js';

const mistakes = 3;

function init() {
  ReactDOM.render(
      <App mistakes={mistakes}
        questions={questions}/>,
      document.querySelector(`#root`)
  );
}

init();
