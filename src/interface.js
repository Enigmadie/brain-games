import readlineSync from 'readline-sync';

import { car, cdr } from 'hexlet-pairs';

const resultForWin = 3;
export default (generateData, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  const iter = (roundCounter) => {
    if (roundCounter === resultForWin) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const data = generateData();
    const question = car(data);
    const trueAnswer = cdr(data);
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
