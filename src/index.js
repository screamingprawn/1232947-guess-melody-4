import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';
import questions from './mocks/questions.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";

const store = createStore(reducer);
const mistakes = 3;

function init() {
  ReactDOM.render(
      <Provider store={store}>
      <App
        errorsCount={mistakes}
        questions={questions}/>
      </Provider>,
      document.querySelector(`#root`)
  );
}

init();
