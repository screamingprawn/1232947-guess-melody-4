import React from 'react';
const handler = () => {};

const WelcomeScreen = (props) => {
  // eslint-disable-next-line react/prop-types
  const mistakes = props.mistakes;
  let tries = (mistakes > 1) ? `попытки` : `попыток`;

  return (
    <div>
      <h3 onClick={handler}>Угадай мелодию!</h3>
      <h3 onClick={handler}>У тебя есть {mistakes} {tries}.</h3>

    </div>);
};

export {WelcomeScreen};

