import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app.jsx';
import questions from './mocks/questions.js';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer.js";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);
const mistakes = 3;

function init() {
  ReactDOM.render(
      <Provider store={store}>
      <App
        mistakes={mistakes}
        questions={questions}/>
      </Provider>,
      document.querySelector(`#root`)
  );
}

init();
