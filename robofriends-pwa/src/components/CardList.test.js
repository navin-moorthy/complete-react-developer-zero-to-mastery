import { shallow } from "enzyme";

import React from "react";
import CardList from "./CardList";

it("expect to render CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "JohnJohn",
      email: "john@gmail.com"
    }
  ];
  const cardListComponent = shallow(<CardList robots={mockRobots} />);
  expect(cardListComponent.debug()).toMatchSnapshot();
});
