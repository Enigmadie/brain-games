import { cons } from 'hexlet-pairs';

import gameProcess from '../game-process';

import random from '../utils';

const greatestCommonDivisor = (num1, num2) => {
  const less = (num1 > num2) ? num2 : num1;
  let i = less;
  while (i >= 0) {
    if (num1 % i === 0 && num2 % i === 0) {
      break;
    }
    i -= 1;
  }
  return i;
};
const generateData = () => {
  const firstInt = random(0, 100);
  const secondInt = random(0, 100);
  const question = (`${firstInt} ${secondInt}`);
  const trueAnswer = greatestCommonDivisor(firstInt, secondInt);
  return cons(question, String(trueAnswer));
};
const description = 'Find the greatest common divisor of given numbers.';

export default () => gameProcess(generateData, description);
