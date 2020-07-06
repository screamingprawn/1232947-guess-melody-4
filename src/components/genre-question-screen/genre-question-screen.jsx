import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GameType} from "../../const.js";
import AudioPlayer from "../audio-player/audio-player.jsx";

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTrack: 0,
      userAnswers: [false, false, false, false]
    };
  }

  render() {
    const {onAnswer, question} = this.props;
    const {variants, genre} = question;
    const {userAnswers, activeTrack} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {genre} треки</h2>
        <form className="game__tracks"
          onSubmit={(evt) => {
            evt.preventDefault();
            onAnswer(question, this.state.userAnswers);
          }}>
          {variants.map((variant, i) => (
            <div key={`${i}-${variant.src}`} className="track">
              <AudioPlayer
                isPlaying={i === activeTrack}
                src={variant.src}
                onPlayButtonClick={() => {
                  this.setState({
                    activeTrack: activeTrack === i ? -1 : i,
                  });
                }}
                isPlaying={i === activeTrack}/>


              <div className="game__answer">
                <input className="game__input visually-hidden"
                  type="checkbox"
                  name="userAnswer"
                  value={`variant-${i}`}
                  id={`variant-${i}`}
                  checked={userAnswers[i]}
                  onChange={(evt) => {
                    const value = evt.target.checked;

                    this.setState({
                      answers: [...userAnswers.slice(0, i),
                        value,
                        ...userAnswers.slice(i + 1)],
                    });
                  }}
                />
                <label className="game__check" htmlFor={`variant-${i}`}>Отметить</label>
              </div>
            </div>
          ))}
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>);
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    variants: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    })).isRequired,
    genre: PropTypes.string.isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
};

export default GenreQuestionScreen;
