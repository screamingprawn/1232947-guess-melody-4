import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from './welcomescreen.jsx';
import ArtistQuestionScreen from './artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from './genre-question-screen/genre-question-screen.jsx';
import GameHeader from "./game-header/game-header.jsx";
import {GameType} from "../const.js";
import {connect} from "react-redux";
import {ActionCreator} from "../reducer.js";
import withAudioPlayer from "../hocs/with-audio-player/with-audio-player.js";

const GenreQuestionScreenWrapped = withAudioPlayer(GenreQuestionScreen);
const ArtistQuestionScreenWrapped = withAudioPlayer(ArtistQuestionScreen);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderGameHeader() {
    const {
      maxMistakes,
      questions,
      onUserAnswer,
      onWelcomeButtonClick,
      step,
    } = this.props;

    const question = questions[step];

    if (step === -1 || step >= questions.length) {
      return (
        <WelcomeScreen handler = {onWelcomeButtonClick}
          mistakes = {maxMistakes}/>);
    }

    if (question) {
      switch (question.type) {
        case GameType.ARTIST:
          return (
            <GameHeader
              type={question.type}>
              <ArtistQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}/>
            </GameHeader>
          );

        case GameType.GENRE:
          return (
            <GameHeader
              type={question.type}>
              <GenreQuestionScreenWrapped
                question={question}
                onAnswer={onUserAnswer}
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

const mapStateToProps = (state) => ({
  step: state.step,
  maxMistakes: state.maxMistakes,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeButtonClick() {
    dispatch(ActionCreator.incrementStep());
  },
  onUserAnswer(question, answer) {
    dispatch(ActionCreator.incrementMistake(question, answer));
    dispatch(ActionCreator.incrementStep());
  },
});

App.propTypes = {
  maxMistakes: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired, // maybe define this better
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
