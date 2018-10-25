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
  // main iter body
  const iter = (random, acc) => {
    const resultForWin = 3;
    const predicate = (random % 2 === 0);
    if (acc === resultForWin) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const trueAnswer = (predicate) ? 'yes' : 'no';
    console.log(`Question ${random}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    iter(randomInt(0, 99), acc + 1);
  };
  iter(randomInt(0, 99), 0);
};
