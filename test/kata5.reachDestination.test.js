const { reachDestination } = require("../src");

describe("reachDestination", () => {
  const distance = 44;
  const speed = 10;
  it("returns string with estimated time of arrival", () => {
    expect(reachDestination(distance, speed)).toEqual("I should be there in 4.4 hours.");
  });
  it("returns string with estimated time of arrival", () => {
    const distance = 35;
    const speed = 5;
    expect(reachDestination(distance, speed)).toEqual("I should be there in 7 hours.");
  });
});
