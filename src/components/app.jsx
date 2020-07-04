import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {WelcomeScreen} from './welcomescreen.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1, // показываем, что никакой экран ещё не включен
    };
  }

  _renderGameScreen() {
    const mistakes = this.props.mistakes;
    const handler = () => {
      this.setState({step: 0});
    };
    const step = this.state.step;

    if (step === -1) {
      return (
        <WelcomeScreen handler = {handler}
          mistakes = {mistakes}/>);
    } else {
      return null;
    }
  }

  render() {
    return this._renderGameScreen();
  }
}


App.propTypes = {
  mistakes: PropTypes.number.isRequired
};

export {App};
