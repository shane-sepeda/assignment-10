const Intern = require('../lib/Intern.js');

test('creates intern object', () => {
    const intern = new Intern('John', 'Intern');

    expect(intern.name).toBe('John');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.getName()).toEqual(intern.name);
    expect(intern.getId()).toEqual(intern.id);

    expect(intern.getRole()).toEqual('Intern');
});
