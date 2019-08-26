import { shallow } from "enzyme";
import React from "react";
import MainPage from "./MainPage";

let MainPageComponent;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };

  MainPageComponent = shallow(<MainPage {...mockProps} />);
});

it("expect to render MainPage component", () => {
  expect(MainPageComponent.debug()).toMatchSnapshot();
});

it("filter robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: "1",
        name: "John",
        email: "john@email.com"
      }
    ],
    searchField: "john",
    isPending: false
  };
  const MainPageComponent2 = shallow(<MainPage {...mockProps2} />);
  expect(MainPageComponent2.instance().filteredRobots()).toEqual([
    {
      id: "1",
      name: "John",
      email: "john@email.com"
    }
  ]);
});

it("filter robots correctly 2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: "1",
        name: "John",
        email: "john@email.com"
      }
    ],
    searchField: "a",
    isPending: false
  };

  const filteredRobots = [];
  const MainPageComponent3 = shallow(<MainPage {...mockProps3} />);
  expect(MainPageComponent3.instance().filteredRobots()).toEqual(
    filteredRobots
  );
});
