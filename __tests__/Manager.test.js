const Manager = require('../lib/Manager');
const manager = new Manager('dave', '76544', 'dave3@gmail.com', '600');

test('test if we can get the constructor values for the manager object', () => {
    expect(manager.name).toBe('dave');
    expect(manager.id).toBe('76544');
    expect(manager.email).toBe('dave3@gmail.com');
    expect(manager.officeNumber).toBe('600');
});

test('test if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('dave');
});

test('test if we can get the id from the getId() method', () => {
    expect(manager.getId()).toBe('76544');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('dave3@gmail.com');
});

test('test if we can get the office number from the getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('600');
});

test('test if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});