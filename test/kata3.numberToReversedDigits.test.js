const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  it("returns a reversed array of the number's digits", () => {
   const number = [2, 3, 4, 5];
    expect(numberToReversedDigits(number)).toEqual([5, 4, 3, 2]);
  });
});
