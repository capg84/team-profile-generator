// using Employee constructor 
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee('Cyprian Gomes', 10, 'cyprian.gomes@live.co.uk');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Cyprian Gomes', 10, 'cyprian.gomes@live.co.uk');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Cyprian Gomes', 10, 'cyprian.gomes@live.co.uk');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Cyprian Gomes', 10, 'cyprian.gomes@live.co.uk');

    expect(employee.getRole()).toEqual('Employee');
}); 