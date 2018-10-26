import readlineSync from 'readline-sync';

import { car, cdr } from 'hexlet-pairs';

export default (logicGame, gameDescription) => {
  const resultForWin = 3;
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  const iter = (roundCounter) => {
    const logic = logicGame();
    const question = car(logic);
    const trueAnswer = cdr(logic);
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
