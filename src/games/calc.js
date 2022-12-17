import greeting from '../cli.js';
import { generateRandomNumber, getUserAnswer, returnBool } from '../index.js';

export const getRightAnswerCalc = (firstNumber, sign, secondNumber) => {
    let rightAnswer = 0;
    if (sign === '+') {
        rightAnswer += firstNumber + secondNumber;
    }
    if (sign === '-') {
        rightAnswer += firstNumber - secondNumber;
    }
    if (sign === '*') {
        rightAnswer += firstNumber * secondNumber;
    }
    return String(rightAnswer);
};

export const brainCalcResult = () => {
    const firstNumber = generateRandomNumber(1, 50);
    const secondNumber = generateRandomNumber(1, 50);
    const sign = ['+', '-', '*'][generateRandomNumber(0, 3)];
    const rightAnswer = getRightAnswerCalc(firstNumber, sign, secondNumber);
    console.log(`Question: ${firstNumber} ${sign} ${secondNumber}`);
    const userAnswer = getUserAnswer();
    return returnBool(userAnswer, rightAnswer);
};

export const playCalc = () => {
    const name = greeting();
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
        if (!brainCalcResult()) {
            console.log(`Let's try again, ${name}!`);
            break;
        }
        if (i === 2) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};
