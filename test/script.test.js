const googleSearch = require("./script.js");

const dbMock = [
  "dog.com",
  "cheese.com",
  "ratpoison.com",
  "ilovedogs.com",
  "dogpictures.com",
  "disney.com"
];

describe("googleSearch", () => {
  it("silly test", () => {
    expect("hello").toBe("hello");
  });

  it("this is a test", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual([
      "dog.com",
      "ilovedogs.com",
      "dogpictures.com"
    ]);
  });

  it("work with undefined and null", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
