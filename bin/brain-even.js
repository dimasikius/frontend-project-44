import {
    generateRandomNumber, getUserAnswer, isEven, returnBool,
} from '../src/index.js';
import greeting from '../src/cli.js';

const userName = greeting();

export const getRightAnswerEven = (task) => {
    const taskIsEven = isEven(task);
    if (taskIsEven) return 'yes';
    if (!taskIsEven) return 'no';
};

export const brainEvenResult = () => {
    const number = generateRandomNumber(1, 30);
    const rightAnswer = getRightAnswerEven(number);
    console.log(`Question: ${number}`);
    const userAnswer = getUserAnswer();
    return returnBool(userAnswer, rightAnswer);
};

export const playEven = (name) => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    for (let i = 0; i < 3; i += 1) {
        if (!brainEvenResult()) {
            console.log(`Let's try again, ${name}!`);
            break;
        }
        if (i === 2) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};

playEven(userName);
