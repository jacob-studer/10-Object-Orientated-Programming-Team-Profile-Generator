const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it("should return the employee's name when it is entered in the input field", () => {
            const name = new getName('John');

            expect(name).toEqual('John');
        })
    })
});