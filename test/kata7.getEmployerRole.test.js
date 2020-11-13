const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  it("returns the employee's role in the company", () => {
    const employees = [{
      name: 'Jeffery',
      role: 'Developer'
    }, {
      name: 'Evalyne',
      role: 'Data Scientist'
    }, {
      name: 'Savanthrit',
      role: 'Business Analyst'
    }]
    expect(getEmployerRole('Savanthrit', employees)).toEqual('Business Analyst'); //make sure that you add the parameters in as part of the variable object.
  })
})
