import readlineSync from 'readline-sync';

import { car, cdr } from 'hexlet-pairs';

export const greetingUser = () => console.log('Welcome to the Brain Games!');

export const meetingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
};

const resultForWin = 3;
export default (generateData, description) => {
  greetingUser();
  console.log(description);

  const nickName = meetingUser();

  const iter = (roundCounter) => {
    if (roundCounter === resultForWin) {
      console.log(`Congratulations, ${nickName}!`);
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

      console.log(`Let's try again, ${nickName}!`);
      return;
    }
    iter(roundCounter + 1);
  };
  iter(0);
};
