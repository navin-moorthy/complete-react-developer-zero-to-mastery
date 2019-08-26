import { shallow } from "enzyme";

import React from "react";
import CounterButton from "./CounterButton";

it("expect to render CounterButton component", () => {
  const mockColor = "red";
  const counterButtonComponent = shallow(<CounterButton color={mockColor} />);
  expect(counterButtonComponent.debug()).toMatchSnapshot();
});

it("expect to render CounterButton component", () => {
  const mockColor = "red";
  const counterButtonComponent = shallow(<CounterButton color={mockColor} />);

  counterButtonComponent.find("[id='counter']").simulate("click");
  counterButtonComponent.find("[id='counter']").simulate("click");
  counterButtonComponent.find("[id='counter']").simulate("click");
  expect(counterButtonComponent.state()).toEqual({ count: 4 });
  expect(counterButtonComponent.props().color).toEqual("red");
});
