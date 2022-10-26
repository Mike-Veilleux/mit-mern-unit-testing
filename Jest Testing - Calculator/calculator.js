const calculator = (num_1, num_2, operand) => {

    if (typeof num_1 != 'number' || typeof num_2 != 'number') {
        return "Error, you must use numbers!";
    }

    if (num_2 === 0 && operand === '/') {
        return 'Error, cannot divide by 0 !'
    }

    switch (operand) {
        case '+':
            return num_1 + num_2;
            break;

        case '-':
            return num_1 - num_2;
            break;

        case '*':
            return num_1 * num_2;
            break;

        case '/':
            return num_1 / num_2;
            break;

        default:
            return 'Error, you must use a valid operator!';
    }
}
module.exports = calculator;