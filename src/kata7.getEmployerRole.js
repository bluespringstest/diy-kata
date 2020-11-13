const getEmployerRole = (employeeName, employees) => {

    let list = employees.find(employee => employee.name === employeeName);
    return Object.values(list).pop();
};

module.exports = getEmployerRole;
