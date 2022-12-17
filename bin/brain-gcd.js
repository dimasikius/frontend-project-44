import { generateRandomNumber, getUserAnswer } from '../src/index.js';
import greeting from '../src/cli.js';

const userName = greeting();

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
    if (userAnswer === rightAnswer) {
        console.log('Correct!');
        return true;
    }
    if (userAnswer !== rightAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
        return false;
    }
};

export const playGcd = (name) => {
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

playGcd(userName);
