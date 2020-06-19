import React from 'react';
import {WelcomeScreen} from './welcomescreen.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const mistakes = props.mistakes;
  return (
    <WelcomeScreen mistakes ={mistakes}/>);
};

export {App};
