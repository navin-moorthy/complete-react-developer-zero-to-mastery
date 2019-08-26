import * as actions from "./actions";
import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING } from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

it("should create an action to search robots", () => {
  const text = "BayWatch";

  expect(actions.setSearchField(text)).toEqual({
    type: CHANGE_SEARCHFIELD,
    payload: "BayWatch"
  });
});

it("should create an action to request robots", () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  console.log(action);
  expect(action[0]).toEqual({ type: REQUEST_ROBOTS_PENDING });
});
