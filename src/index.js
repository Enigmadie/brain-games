import readlineSync from 'readline-sync';

export const sayCommonHelloForAll = () => console.log('Welcome to the Brain Games!');

export const sayHelloToUser = () => {
  const greetingUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${greetingUser}!`);
};
