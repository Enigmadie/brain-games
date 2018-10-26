import { cons } from 'hexlet-pairs';

import interfaceGame from '../game-interface';

import { random as randomInt, isEven } from '../game-general';

const logicGame = () => {
  const question = randomInt(0, 99);
  const trueAnswer = isEven(question) ? 'yes' : 'no';
  return cons(question, trueAnswer);
};
const gameDescription = "Answer 'yes' if number even otherwise answer 'no'";
const gameStart = () => interfaceGame(logicGame, gameDescription);

export default gameStart;
