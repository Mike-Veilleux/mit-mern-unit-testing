function Greet(name) {

    if (typeof (name) === 'string') {
        if (name === '') {
            return 'Hello, there!';
        } else if (name === name.toUpperCase()) {
            return `HELLO, ${name}!`;
        } else {
            return `Hello, ${name}!`;
        }
    }

    if (Array.isArray(name) && name.length >= 1) {
        let str = 'Hello, ';
        for (let i = 0; i < name.length; i++) {
            str += `${name[i]}, `;
        }
        str = str.slice(0, -2);
        return `${str}!`;
    } else {
        return 'Hello, there!';
    }

}

module.exports = Greet;