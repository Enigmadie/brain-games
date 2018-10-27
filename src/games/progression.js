import { cons } from 'hexlet-pairs';

import gameProcess from '../game-process';

import random from '../utils';

const userString = '';
const startCounter = 0;
const lengthCounter = 10;
const randomProgression = (int, str, count, step, gap) => {
  if (count === lengthCounter) {
    return str;
  }
  if (count === gap) {
    return randomProgression(int + step, `${str} ..`, count + 1, step);
  }
  return randomProgression(int + step, `${str} ${String(int)}`, count + 1, step, gap);
};
const generateData = () => {
  const firstInt = random(0, 10);
  const gameStep = random(1, 10);
  const space = random(0, 10);
  const question = randomProgression(firstInt, userString, startCounter, gameStep, space);
  const trueAnswer = space * gameStep + firstInt;
  return cons(question, String(trueAnswer));
};
const description = 'What number is missing in this progression?';

export default () => gameProcess(generateData, description);
