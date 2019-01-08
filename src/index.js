import 'dotenv/config';

console.log(process.env.TESTSTRING);

console.log('Running node.js server...');

const sayHi = () => {
  console.log('Hi');
};

sayHi();
