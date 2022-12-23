const Engineer = require('../lib/Engineer');
const engineer = new Engineer('ameera', '0786', 'ameera@gmail.com', 'AmeeraNoor');

test('test if we can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('ameera');
    expect(engineer.id).toBe('0786');
    expect(engineer.email).toBe('ameera@gmail.com');
    expect(engineer.githubUsername).toBe('AmeeraNoor');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('ameera');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('0786');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('ameera@gmail.com');
});

test('test if we can get the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('AmeeraNoor');
});

test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});