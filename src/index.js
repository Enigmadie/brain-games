import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!');
export const greetingUser = readlineSync.question('May I have your name? ');
console.log(`Hello, ${greetingUser}!`);

