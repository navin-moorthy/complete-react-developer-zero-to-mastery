import { shallow } from "enzyme";

import React from "react";
import Card from "./Card";

it("expect to render Card component", () => {
  const cardComponent = shallow(<Card />);
  expect(cardComponent.debug()).toMatchSnapshot();
});
