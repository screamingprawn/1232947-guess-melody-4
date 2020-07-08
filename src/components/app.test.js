import React from 'react';
import {App} from './app.jsx';
import renderer from 'react-test-renderer';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import questions from '../mocks/questions.js';

const mockStore = configureStore([]);

describe(`App tests`, () => {
  it(`App correctly renders after relaunch`, () => {
    const store = mockStore({
      mistakes: 0,
    });

    const tree = renderer
   .create(
       <Provider store={store}>
         <App
           maxMistakes={3}
           questions={questions}
           onUserAnswer={() => {}}
           onWelcomeButtonClick={() => {}}
           step={-1}

         />
       </Provider>
   )
  .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

/* npm run eslint -- --fix */
