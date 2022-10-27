// @ts-nocheck
function Greet(name) {

    let isArray = Array.isArray(name);
    let isUpperCase;

    if (!isArray) {
        isUpperCase = name === name.toUpperCase();
    }

    if (name === "") {
        return 'Hello, there!';
    }
    else if (!isArray && isUpperCase) {
        return `HELLO, ${name}!`;
    }
    else if (isArray) {
        let str = 'Hello, ';
        for (let i = 0; i < name.length; i++) {
            str += `${name[i]}, `;
        }
        str = str.slice(0, -2);
        return `${str}!`;
    }
    else {
        return `Hello, ${name}!`;
    }
}


module.exports = Greet;