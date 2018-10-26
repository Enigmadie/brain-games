import readlineSync from 'readline-sync';

import { sayCommonHelloForAll, random as randomInt, resultForWin } from '../game-interface';

export default () => {
  sayCommonHelloForAll();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  const iter = (roundCounter) => {
    const isEven = question => ((question % 2 === 0) ? 'yes' : 'no');
    const question = randomInt(0, 99);
    const trueAnswer = isEven(question);
    if (roundCounter === resultForWin) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    console.log(`Question ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    iter(roundCounter + 1);
  };
  iter(0);
};
