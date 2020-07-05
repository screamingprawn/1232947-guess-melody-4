import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from './welcomescreen.jsx';
import ArtistQuestionScreen from './artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from './genre-question-screen/genre-question-screen.jsx';
import GameHeader from "./game-header/game-header.jsx";
import {GameType} from "../const.js";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1, // показываем, что никакой экран ещё не включен
    };
  }

  _renderGameHeader() {
    const mistakes = this.props.mistakes;
    const questions = this.props.questions;

    const handler = () => {
      this.setState({step: 0});
    };

    const step = this.state.step;
    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen handler = {handler}
          mistakes = {mistakes}/>);
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameHeader
              type={question.type}>
              <ArtistQuestionScreen
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameHeader>
          );

        case GameType.GENRE:
          return (
            <GameHeader
              type={question.type}>
              <GenreQuestionScreen
                question={question}
                onAnswer={() => {
                  this.setState((prevState) => ({
                    step: prevState.step + 1,
                  }));
                }}
              />
            </GameHeader>
          );
      }
    }

    return null;
  }

  render() {
    return this._renderGameHeader();
  }
}


App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired // maybe define this better
};

export {App};
