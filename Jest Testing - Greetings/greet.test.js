const Greet = require('./greet');

describe('Testing greet function', () => {

    it('Should return standard greeting if there is no argument', () => {
        expect(Greet()).toBe('Hello, there!')
    })

    it('Should return standard greeting if argument of type String is empty', () => {
        expect(Greet('')).toBe('Hello, there!')
    })

    it('Should return standard greeting if argument of type Array is empty', () => {
        expect(Greet([])).toBe('Hello, there!')
    })

    it('Should return personalized greeting when name is pass as argument', () => {
        expect(Greet('Mike')).toBe('Hello, Mike!')
    })

    it('Should return all upper case greeting if argument of type string is all uppercase ', () => {
        expect(Greet('MIKE')).toBe('HELLO, MIKE!')
    })

    it('Should handle an array of two names as argument and greet both names', () => {
        expect(Greet(['Mike', 'Kai'])).toBe('Hello, Mike, Kai!')
    })

    it('Should handle an array of arbitrary number of name as argument and greet all of the names', () => {
        expect(Greet(['Mike', 'Danielle', 'Eva', 'Kai'])).toBe('Hello, Mike, Danielle, Eva, Kai!')
    })

});





