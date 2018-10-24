import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const greetingUser = readlineSync.question('May I have your name? ');
console.log(`Hello, ${greetingUser}!`);

export default greetingUser;
