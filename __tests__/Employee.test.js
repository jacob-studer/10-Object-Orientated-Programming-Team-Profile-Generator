const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it("returns the entered employee name", () => {
            expect(new Employee('John').getName()).toBe('John');
        })
    })
    describe('getId', () => {
        it("returns the entered employee Id", () => {
            expect(new Employee('537').getId()).toEqual('537');
        })
    })
    describe('getEmail', () => {
        it("returns the entered employee Email", () => {
            expect(new Employee('john@work.com').getEmail()).toBe('john@work.com');
        })
    })
    describe('getRole', () => {
        it("returns a static employee Role", () => {
            expect(new Employee().getRole()).toBe('Employee');
        })
    })
});