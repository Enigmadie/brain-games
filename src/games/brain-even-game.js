import { sayCommonHelloForAll } from '..';

import readlineSync from 'readline-sync';

export default () => {
  // common greeting for all
  sayCommonHelloForAll();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  // function generation random integer
  const randomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  // main iter
  const iter = (random, acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}`);
    }
    // even random value
    if (random % 2 === 0) {
      console.log(`Question ${random}`);
      const answerEven = readlineSync.question('Your answer: ', {
        trueValue: ['yes'],
        falseValue: ['no'],
      });
      if (answerEven === true) {
        console.log('Correct!');
        return iter(randomInt(0, 99), acc + 1);
      }
      if (answerEven === false) {
        console.log('"no" is wrong answer ;(. Correct answer was "yes"');
        console.log(`Let's try again, ${userName}!`);
      } else {
        console.log('Incorrect answer ;(. Next time select "yes" or "no"');
      }
    }
    // odd random value
    if (random % 2 !== 0) {
      console.log(`Question ${random}`);
      const answerOdd = readlineSync.question('Your answer: ', {
        trueValue: ['no'],
        falseValue: ['yes'],
      });
      if (answerOdd === true) {
        console.log('Correct!');
        return iter(randomInt(0, 99), acc + 1);
      } if (answerOdd === false) {
        console.log('"yes" is wrong answer ;(. Correct answer was "no"');
        console.log(`Let's try again, ${userName}!`);
      } else {
        console.log('Incorrect answer ;(. Next time select "yes" or "no"');
      }
    }
  };
  return iter(randomInt(0, 99), 0);
};
