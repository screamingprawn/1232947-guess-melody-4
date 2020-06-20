import React from 'react';
import {App} from './app.jsx';
import renderer from 'react-test-renderer';

// describe(`iudshfiudsh`, () => {
it(`App correctly renders after relaunch`, () => {
  const tree = renderer
  .create(<App
    mistakes={0} />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});

// });

/* npm run lint -- --fix */
