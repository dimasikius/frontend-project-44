import { generateRandomNumber, getUserAnswer, returnBool } from '../index.js';
import greeting from '../cli.js';

export const getRightAnswerPrime = (number) => {
    let result = '';
    let counter = 0;
    for (let i = 1; i <= number; i += 1) {
        if (number % i === 0) {
            counter += 1;
        }
    }
    if (counter === 2) {
        result += 'yes';
    } else {
        result += 'no';
    }
    return result;
};

export const brainPrimeResult = () => {
    const randomNumber = generateRandomNumber(1, 30);
    const rightAnswer = getRightAnswerPrime(randomNumber);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = getUserAnswer();
    return returnBool(userAnswer, rightAnswer);
};

export const playPrime = () => {
    const name = greeting();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        if (!brainPrimeResult()) {
            console.log(`Let's try again, ${name}!`);
            break;
        }
        if (i === 2) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};
