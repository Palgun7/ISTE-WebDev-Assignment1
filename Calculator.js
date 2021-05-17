const operator = prompt('Enter operator ( either +, -, * or / ): ');
const a = parseFloat(prompt('Enter first number: '));
const b = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
         result = a + b;
        console.log(`${a} + ${b} = ${result}`);
        break;

    case '-':
         result = a - b;
        console.log(`${a} - ${b} = ${result}`);
        break;

    case '*':
         result = a * b;
        console.log(`${a} * ${b} = ${result}`);
        break;

    case '/':
         result = a / b;
        console.log(`${a} / ${b} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}