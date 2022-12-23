const Employee = require('../lib/Employee');
const employee = new Employee('samantha', '12333', 'samantha1@gmail.com');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('samantha');
    expect(employee.id).toBe('12333');
    expect(employee.email).toBe('samantha1@gmail.com');
});

test('test if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('samantha');
});

test('test if we can get the id from the getId() method', () => {
    expect(employee.getId()).toBe('12333');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('samantha1@gmail.com');
});

test('test if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});