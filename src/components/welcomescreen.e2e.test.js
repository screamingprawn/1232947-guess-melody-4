import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WelcomeScreen} from './welcomescreen.jsx';

Enzyme.configure({adapter: new Adapter()});

/* - Проверить, что работает.
- что включен в скрипты. */
it(`Welcome button gets pressed`, () => {
  const clickHandler = jest.fn();

  const welcomeScreen = shallow(<WelcomeScreen // mount (<App >/)
    handler={clickHandler}
    mistakes={0}/>);


  const welcomeButton = welcomeScreen.find(`button.welcome__button`);
  welcomeButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);

});
