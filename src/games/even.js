import { cons } from 'hexlet-pairs';

import gameProcess from '../interface';

import randomInt from '../utils';

const isEven = num => (num % 2 === 0);
const generateData = () => {
  const question = randomInt(0, 99);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};
const description = "Answer 'yes' if number even otherwise answer 'no'";
export default () => gameProcess(generateData, description);
