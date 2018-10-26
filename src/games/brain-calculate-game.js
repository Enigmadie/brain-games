import { cons } from 'hexlet-pairs';

import interfaceGame from '../game-interface';

import { random } from '../game-general';

const logicGame = () => {
  const marks = '-+*';
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
const gameDescription = 'What is the result of the expression';

const gameStart = () => interfaceGame(logicGame, gameDescription);

export default gameStart;
