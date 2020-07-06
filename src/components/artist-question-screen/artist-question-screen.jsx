import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {GameType} from "../../const.js";

class ArtistQuestionScreen extends PureComponent {
  render() {
    const {onAnswer, question, renderPlayer} = this.props;
    const {variants, song} = question

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">

            {renderPlayer(song.src, 0)}
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
  renderPlayer: PropTypes.func.isRequired,
};

export default ArtistQuestionScreen;
