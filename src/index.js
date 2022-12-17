import readlineSync from 'readline-sync';

export const generateRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const isEven = (number) => {
  let result = 0;
  if (number % 2 === 0) result += true;
  if (number % 2 !== 0) result += false;
  return result;
};

export const returnBool = (usersAnswer, rightAnswer) => {
  let result = 0;
  if (usersAnswer === rightAnswer) {
    console.log('Correct!');
    result += true;
  }
  if (usersAnswer !== rightAnswer) {
    console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
    result += false;
  }
  return result;
};
