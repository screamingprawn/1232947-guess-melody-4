import React from "react";
import renderer from "react-test-renderer";
import {GameHeader} from "./game-header.jsx";
import {GameType} from "../../const.js";

// для тестирования компонента-обёртки достаточно заглушки в children
const children = <div className="children-component" />;

it(`GameHeader is rendered correctly`, () => {
  const tree = renderer.create(
      <GameHeader
        type={GameType.ARTIST}
        mistakes={3}>
        {children}
      </GameHeader>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
