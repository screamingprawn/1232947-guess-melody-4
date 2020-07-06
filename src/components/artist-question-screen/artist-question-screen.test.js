import React from 'react';
import ArtistQuestionScreen from './artist-question-screen.jsx';
import renderer from 'react-test-renderer';

const question = {
  type: `genre`,
  genre: `rock`,
  song: {
    artist: `Billy Bob`,
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
  },
  variants: [{
    picture: `https://api.adorable.io/avatars/128/0`,
    artist: `Jim Bim`,
  }, {
    picture: `https://api.adorable.io/avatars/128/1`,
    artist: `Billy Bob`,
  }, {
    picture: `https://api.adorable.io/avatars/128/2`,
    artist: `Ada Lovelace`,
  }],
};

it(`ArtistQuestionScreen is rendered correctly`, () => {
  const tree = renderer.create(
      <ArtistQuestionScreen
        question={question}
        onAnswer={() => {}}
        renderPlayer={() => {}}/>, {
       createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
