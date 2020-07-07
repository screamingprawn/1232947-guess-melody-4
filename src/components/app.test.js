import React from 'react';
import {App} from './app.jsx';
import renderer from 'react-test-renderer';
import questions from '../mocks/questions.js';

describe(`App tests`, () => {
  it(`App correctly renders after relaunch`, () => {
    const tree = renderer
  .create(<App
    mistakes={0}
    questions={questions}
    step={-1}
    onWelcomeButtonClick={()=> {}}
    onUserAnswer={() => {}}/>)
  .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

/* npm run eslint -- --fix */
