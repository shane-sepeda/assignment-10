const Engineer = require('../lib/Engineer.js');

test('creates an engineer child object', () => {
    const engineer = new Engineer('Alec', 'Engineer');

    expect(engineer.name).toBe('Alec');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.stringContaining('com'));
    expect(engineer.getName()).toEqual(engineer.name);
    expect(engineer.getId()).toEqual(engineer.id);

    expect(engineer.getRole()).toEqual('Engineer');
});
