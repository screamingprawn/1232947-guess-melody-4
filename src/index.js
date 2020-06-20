import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';

const mistakes = 3;
const handler = () => {};

function init() {
  ReactDOM.render(
      <App mistakes={mistakes}
        handler={handler}/>,
      document.querySelector(`#root`)
  );
}

init();
