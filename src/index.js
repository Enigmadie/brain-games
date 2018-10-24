import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export default () => {
  const greetingUser = readlineSync.question('May I have your name? ');
  return console.log(`Hello, ${greetingUser}!`);
};
