import React from 'react';
import {WelcomeScreen} from './welcomescreen.jsx';
import renderer from 'react-test-renderer';

it(`WelcomeScreen component correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<WelcomeScreen
    mistakes={0} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
