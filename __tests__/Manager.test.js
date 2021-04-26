const Manager = require('../lib/Manager');

describe('Manager subclass', () => {
    describe('getOfficeNumber', () => {
        it("returns the entered managers office number", () => {
            expect(new Manager('12').getOfficeNumber()).toBe('12');
        })
    })
    describe('getRole', () => {
        it("returns a static Manager Role", () => {
            expect(new Manager().getRole()).toBe('Manager');
        })
    })
});