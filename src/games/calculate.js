import { cons } from 'hexlet-pairs';

import gameProcess from '../game-process';

import random from '../utils';

const marks = '+-*';
const generateData = () => {
  const firstInt = random(0, 25);

  const secondInt = random(0, 25);

  const randomMark = marks[random(0, marks.length)];

  switch (randomMark) {
    case '+': {
      const question = (`${firstInt} + ${secondInt}`);
      const trueAnswer = String(firstInt + secondInt);
      return cons(question, trueAnswer);
    }
    case '-': {
      const question = (`${firstInt} - ${secondInt}`);
      const trueAnswer = String(firstInt - secondInt);
      return cons(question, trueAnswer);
    }
    default: {
      const question = (`${firstInt} * ${secondInt}`);
      const trueAnswer = String(firstInt * secondInt);
      return cons(question, trueAnswer);
    }
  }
};
const description = 'What is the result of the expression';

export default () => gameProcess(generateData, description);
