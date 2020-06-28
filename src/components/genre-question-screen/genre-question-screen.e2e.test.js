import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

const question = {
  type: `genre`,
  genre: `rock`,
  variants: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`,
  }, {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`,
  }],
};

it(`One of the variants gets selected`, () => {
  const genreQuestionScreen = shallow(<GenreQuestionScreen // mount (<App >/)
    onAnswer ={jest.fn()}
    question ={question}/>);

  const variantLabel = genreQuestionScreen.find(`input`).at(0);
  variantLabel.simulate(`change`, {target: {checked: true}});
  const answers = genreQuestionScreen.state().answers;
  expect(answers).toEqual([true, false, false, false]);
});
