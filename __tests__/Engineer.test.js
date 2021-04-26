const Engineer = require('../lib/Engineer');

describe('Engineer subclass', () => {
    describe('getGithub', () => {
        it("returns the entered engineers github", () => {
            expect(new Engineer('537', 'John','john@work.com', 'john-doe').getGithub()).toBe('john-doe');
        })
    })
    describe('getRole', () => {
        it("returns a static engineer Role", () => {
            expect(new Engineer().getRole()).toBe('Engineer');
        })
    })
});