import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

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

const mockEvent = {
  preventDefault() {}
};

it(`One of variants gets selected`, () => {
  const userAnswer = {picture: `https://api.adorable.io/avatars/128/0`,
    artist: `Jim Bim`};

  const onAnswer = jest.fn();

  const artistQuestionScreen = shallow(<ArtistQuestionScreen
    onAnswer ={onAnswer}
    question ={question}
    renderPlayer={() => {}}/>);

  const answer = artistQuestionScreen.find(`input`).at(0);
  answer.simulate(`change`, mockEvent);

  expect(onAnswer).toHaveBeenCalledTimes(1);

  expect(onAnswer.mock.calls[0][0]).toMatchObject(question);
  expect(onAnswer.mock.calls[0][1]).toMatchObject(userAnswer);
});
