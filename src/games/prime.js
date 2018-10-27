import { cons } from 'hexlet-pairs';

import gameProcess from '../game-process';

import randomInt from '../utils';

const isPrime = (num) => {
  const startDividend = 2;
  const iter = (int, acc) => {
    if (acc === int || int === 1) {
      return true;
    }
    if (int % acc === 0) {
      return false;
    }
    return iter(int, acc + 1);
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
