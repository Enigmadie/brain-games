import { cons } from 'hexlet-pairs';

import gameProcess from '../game-process';

import randomInt from '../utils';

const startDividend = 2;

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const iter = (int, div) => {
    if (div > int / 2) {
      return true;
    }
    if (int % div === 0) {
      return false;
    }
    return iter(int, div + 1);
  };
  return iter(num, startDividend);
};
const generateData = () => {
  const question = randomInt(1, 99);

  const trueAnswer = isPrime(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => gameProcess(generateData, description);
