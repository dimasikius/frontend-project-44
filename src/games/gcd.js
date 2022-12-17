import { generateRandomNumber, getUserAnswer, returnBool } from '../index.js';
import greeting from '../cli.js';

export const getRightAnswerGcd = (firstNumber, secondNumber) => {
    if (!secondNumber) {
        return String(firstNumber);
    }
    return String(getRightAnswerGcd(secondNumber, firstNumber % secondNumber));
};

export const brainGcdResult = () => {
    const firstNumber = generateRandomNumber(1, 50);
    const secondNumber = generateRandomNumber(1, 50);
    const rightAnswer = getRightAnswerGcd(firstNumber, secondNumber);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const userAnswer = getUserAnswer();
    return returnBool(userAnswer, rightAnswer);
};

export const playGcd = () => {
    const name = greeting();
    console.log('Find the greatest common divisor of given numbers.');
    for (let i = 0; i < 3; i += 1) {
        if (!brainGcdResult()) {
            console.log(`Let's try again, ${name}!`);
            break;
        }
        if (i === 2) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};
