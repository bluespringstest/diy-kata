const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("Returns 'Yes' when booleanToWord is passed true.", () => {
    const boolean = true;
    expect(booleanToWord(boolean)).toEqual(
      "Yes"
    );
  })
  it("Returns 'No' when booleanToWord is passed false.",() => {
      const boolean = false;
      expect(booleanToWord(boolean)).toEqual(
        "No"
      );
  })
});
