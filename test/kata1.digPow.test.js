const { digPow } = require("../src");

describe("digPow", () => {
  it("Returns the highest number that the n number can be multiplied by and still get the same answer", () => {
    expect(digPow(89, 1)).toEqual(1);
    expect(digPow(92, 1)).toEqual(-1);
    expect(digPow(46288, 3)).toEqual(51);
  });
});
