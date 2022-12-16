import { generateRandomNumber, getUserAnswer } from '../src/index.js'
import { greeting } from '../src/cli.js';

const userName = greeting();

export const getRightAnswerCalc = (firstNumber, sign, secondNumber) => {
    let rightAnswer = 0
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
    if (userAnswer === rightAnswer) {
        console.log('Correct!');
        return true;
    }
    if (userAnswer !== rightAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
        return false;
    }
};

export const playCalc = (userName) => {
    console.log('What is the result of the expression?');
    for (let i = 0; i < 3; i += 1) {
        if (!brainCalcResult()) {
            console.log(`Let's try again, ${userName}!`);
            break;
        }
        if (i === 2) {
            console.log(`Congratulations, ${userName}!`)
        }
    }
};

playCalc(userName);
