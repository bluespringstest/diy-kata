const { joinNames } = require("../src");

describe("joinNames", () => {
  it("returns string of names, seperated by commas and an ampersand", () => {
    const namesObj = [
      {
        name: 'Bob'
      }, {
        name: 'Jo'
      }, {
        name: 'Fred'
      }]
      expect(joinNames(namesObj)).toEqual("Bob,Jo & Fred")
  });
  it("returns string of names, seperated by commas and an ampersand", () => {
    const namesObj = [
      {
        name: 'Stark'
      }, {
        name: 'Targaryen'
      }, {
        name: 'Lannister'
      }, {
        name: "Who's Hodor?"
      }]
      expect(joinNames(namesObj)).toEqual("Stark,Targaryen,Lannister & Who's Hodor?")
})
});
