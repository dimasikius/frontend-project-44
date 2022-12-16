import readlineSync from 'readline-sync'

export const generateRandomNumber = (min, max) => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
};

export const getUserAnswer = () => {
    const userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
};

export const isEven = (number) => {
    if (number % 2 === 0) return true;
    else if (number % 2 !== 0) return false;
};