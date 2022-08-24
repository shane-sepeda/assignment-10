const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const Manager = new Intern('Jared', 'Manager');

    expect(manager.name).toBe('Jared');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.getName()).toEqual(manager.name);
    expect(manager.getId()).toEqual(manager.id);

    expect(manager.getRole()).toEqual('Manager');
});
