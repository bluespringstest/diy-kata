const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    const number = 9;
    expect(fizzBuzz(number)).toEqual(
      "Fizz"
    )
  });

  it("returns Buzz when passed a multiple of 5", () => {
    const number2 = 10;
    expect(fizzBuzz(number2)).toEqual(
      "Buzz"
    );
  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    const number3 = 15;
    expect(fizzBuzz(number3)).toEqual(
      "FizzBuzz"
    );
  });

  it("returns the number when it isn't a multiple of 3 or 5", () => {
    const number4 = 14;
    expect(fizzBuzz(number4)).toEqual(
      14
    );
  });
});
