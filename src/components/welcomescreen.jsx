import React from 'react';
import PropTypes from 'prop-types';

const handler = () => {};

const WelcomeScreen = (props) => {
  const mistakes = props.mistakes;
  let tries = (mistakes > 1) ? `попытки` : `попыток`;

  return (
    <div>
      <h3 onClick={handler}>Угадай мелодию!</h3>
      <h3 onClick={handler}>У тебя есть {mistakes} {tries}.</h3>
    </div>);
};

/* PropTypes */
WelcomeScreen.propTypes = {
  mistakes:  PropTypes.number.isRequired
};

export {WelcomeScreen};

