import React from 'react';
import {App} from './app.jsx';
import renderer from 'react-test-renderer';
import questions from '../mocks/questions.js';

describe(`App tests`, () => {
  it(`App correctly renders after relaunch`, () => {
    const tree = renderer
  .create(<App
    mistakes={0}
    questions={questions}/>)
  .toJSON();

    expect(tree).toMatchSnapshot();
  });

});

/* npm run eslint -- --fix */
