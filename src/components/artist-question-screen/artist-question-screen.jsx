import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GameType} from "../../const.js";
import AudioPlayer from "../audio-player/audio-player.jsx";

class ArtistQuestionScreen extends PureComponent {
  constructor (props) {
    super (props);

    this.state = {
      isPlaying: true,
    };
  }

  render() {
    const {isPlaying} = this.state;
    const {onAnswer, question} = this.props;
    const {variants, song} = question;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <AudioPlayer
              isPlaying={isPlaying}
              src={song.src}
              onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}/>
          </div>
        </div>
        <form className="game__artist">
          {variants.map((variant, i) => (
          <div className="artist"
            key={variant.artist}>
            <input className="artist__input visually-hidden"
              type="radio"
              name="artistAnswer"
              value={`variant-${i}`}
              id={`variant-${i}`}
              onChange={(evt) => {
                evt.preventDefault();
                onAnswer(question, variant);
              }}
            />
            <label className="artist__name" htmlFor={`variant-${i}`}>
              <img className="artist__picture"
                src={variant.picture}
                alt={variant.artist}/>
              {variant.artist}
            </label>
          </div>
        ))}
      </form>
    </section>
  );
}};

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    variants: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([GameType.ARTIST, GameType.GENRE]).isRequired,
  }).isRequired,
};

export default ArtistQuestionScreen;
