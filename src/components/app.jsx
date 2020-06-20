import React from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from './welcomescreen.jsx';

const App = (props) => {
  return (
    <WelcomeScreen mistakes ={props.mistakes}
      handler = {props.handler}/>);
};

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired
};

export {App};
