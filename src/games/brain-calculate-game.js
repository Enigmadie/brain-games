import readlineSync from 'readline-sync';

import { cons, car, cdr } from 'hexlet-pairs';

import { sayCommonHelloForAll, random, resultForWin } from '../game-interface';

const marks = '-+*';

export default () => {
  sayCommonHelloForAll();
  console.log('What is the result of the expression?');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}`);
  const iter = (roundCounter) => {
    const question = cons(random(0, 25), random(0, 25));
    const firstInt = car(question);
    const secondInt = cdr(question);
    const isSameMark = (randomMark) => {
      if (randomMark === '+') {
        return firstInt + secondInt;
      } if (randomMark === '-') {
        return firstInt - secondInt;
      }
      return firstInt * secondInt;
    };
    const randomMark = marks[random(0, marks.length)];
    const trueAnswer = isSameMark(randomMark);
    if (roundCounter === resultForWin) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    console.log(`Question ${firstInt} ${randomMark} ${secondInt}`);
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === trueAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${trueAnswer}`);
      console.log(`Let's try again ${userName}!`);
      return;
    }
    iter(roundCounter + 1);
  };
  iter(0);
};
