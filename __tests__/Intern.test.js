const Intern = require('../lib/Intern');

describe('Intern subclass', () => {
    describe('getSchool', () => {
        it("returns the entered interns school", () => {
            expect(new Intern('537', 'John','john@work.com', 'Denver University').getSchool()).toBe('Denver University');
        })
    })
    describe('getRole', () => {
        it("returns a static intern Role", () => {
            expect(new Intern().getRole()).toBe('Intern');
        })
    })
});