import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: ""
  };

  it("should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: "CHANGE_SEARCHFIELD",
        payload: "abc"
      })
    ).toEqual({
      searchField: "abc"
    });
  });
});

describe("requestRobots", () => {
  const initialRequestRobots = {
    robots: [],
    isPending: false
  };

  it("should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialRequestRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialRequestRobots, {
        type: "REQUEST_ROBOTS_PENDING"
      })
    ).toEqual({
      robots: [],
      isPending: true
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialRequestRobots, {
        type: "REQUEST_ROBOTS_SUCCESS",
        payload: ["abc"]
      })
    ).toEqual({
      robots: ["abc"],
      isPending: false
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialRequestRobots, {
        type: "REQUEST_ROBOTS_FAILED",
        payload: "Oops..! Encountered an Error"
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: "Oops..! Encountered an Error"
    });
  });
});
