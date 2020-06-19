import React from 'react';
import PropTypes from 'prop-types';

const handler = () => {};

const WelcomeScreen = () => {
  return (
    <div>
      <h3 onClick={handler}>Угадай мелодию!</h3>
      <h3 onClick={handler}>У тебя есть 1 попытка.</h3>

    </div>);
};

export {WelcomeScreen};
