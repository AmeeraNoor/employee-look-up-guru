const Employee = require('../lib/Employee');
const employee = new Employee('joelle', '5768098', 'jdeschat@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('joelle');
    expect(employee.id).toBe('5768098');
    expect(employee.email).toBe('jdeschat@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('joelle');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('5768098');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('jdeschat@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});