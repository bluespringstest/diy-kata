const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("Returns the corresponding cat and dog years against the given human years", () => {
        const number = (5);

        expect(humanCatDogYears(number)).toEqual([5, 36, 39]);
    })

});
// Look Ma, no handlebars!!!
