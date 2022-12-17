import { generateRandomNumber, getUserAnswer, returnBool } from '../index.js';
import greeting from '../cli.js';

export const generateProgressionPlusAnswer = (progressionLength, startNumber, step, randIndex) => {
    const progression = [];
    let startedNumber = startNumber;
    for (let i = 0; i < progressionLength; i += 1) {
        progression.push(startedNumber);
        startedNumber += step;
    }
    const rightAnswer = progression[randIndex];
    progression[randIndex] = '..';
    return [rightAnswer, progression];
};

export const brainProgressionResult = () => {
    const progressionLength = generateRandomNumber(5, 15);
    const startNumber = generateRandomNumber(1, 15);
    const step = generateRandomNumber(1, 10);
    const randomIndex = generateRandomNumber(0, progressionLength);
    const progressionAndAnswer = generateProgressionPlusAnswer(progressionLength, startNumber, step, randomIndex);
    const rightAnswer = String(progressionAndAnswer[0]);
    const progression = progressionAndAnswer[1].join(' ');
    console.log(`Question: ${progression}`);
    const userAnswer = getUserAnswer();
    return returnBool(userAnswer, rightAnswer);
};

export const playProgression = () => {
    const name = greeting();
    console.log('What number is missing in the progression?');
    for (let i = 0; i < 3; i += 1) {
        if (!brainProgressionResult()) {
            console.log(`Let's try again, ${name}!`);
            break;
        }
        if (i === 2) {
            console.log(`Congratulations, ${name}!`);
        }
    }
};
