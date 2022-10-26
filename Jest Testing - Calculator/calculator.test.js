
// Ressources used for this exercise:
// https://humanwhocodes.com/snippets/2019/05/jest-globals-intellisense-visual-studio-code/
// https://jestjs.io/docs/getting-started


const calculator = require('./calculator');


describe("Calculate Numbers with valid operator (+ - * /)", () => {

    it('Should Add two numbers', () => {
        expect(calculator(5, 10, '+')).toBe(15)
    })

    it('Should Subtract two numbers', () => {
        expect(calculator(10, 5, '-')).toBe(5)
    })

    it('Should Multiply two numbers', () => {
        expect(calculator(5, 10, '*')).toBe(50)
    })

    it('Should Devide two numbers', () => {
        expect(calculator(10, 5, '/')).toBe(2)
    })

});

describe("Check if arguments are valid", () => {

    it('First Arg should should be a numbers', () => {
        expect(calculator("5", 10, '+')).toMatch(/Error, you must use numbers!/)
    })

    it('Second Arg should should be a numbers', () => {
        expect(calculator(10, "5", '-')).toMatch(/Error, you must use numbers!/)
    })

    it('Third Arg should should be a valid operator', () => {
        expect(calculator(10, 5, 'x')).toMatch(/Error, you must use a valid operator/)
    })


});

describe("Check error with 0 as value", () => {

    it('Error on divide by 0', () => {
        expect(calculator(5, 0, '/')).toMatch(/Error, cannot divide by 0 !/)
    })


});