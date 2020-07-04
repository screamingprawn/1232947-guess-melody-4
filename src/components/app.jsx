import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from './welcomescreen.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WelcomeScreen mistakes ={this.props.mistakes}
        handler = {this.props.handler}/>);
  }
}

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired
};

export {App};
