const inquirer = require("inquirer");
const chalk = require ("chalk")
async function calculator() {
  let userInput = await inquirer.prompt([
    { message:chalk.bgCyanBright("enter first number"),type:"number", name: "n1" },
                        { message: chalk.bgBlueBright("enter operator i.e +,-,x,/"), name: "operator" },
                        { message: chalk.bgGreenBright("enter second number"),type:"number", name: "n2" },
  ]);

  var num1 = userInput.n1;
  var num2 = userInput.n2;
  var operation = userInput.operator;

  switch (operation) {
    case "+":
      console.log(sum(num1, num2));
      break;
    case "-":
      console.log(subtract(num1, num2));
      break;
    case "x":
      console.log(multiply(num1, num2));
      break;
    case "/":
      console.log(divide(num1, num2));
      break;
    default:
      console.log("Enter valid operator");
      break;
  }
}

function sum(num1: number, num2: number): number {
    return chalk.red (num1 + num2);
}
function subtract(num1 : number, num2: number): number {
    return chalk.blue(num1 - num2);
}
function multiply(num1 : number, num2: number): number {
    return chalk.green(num1 * num2) ;
}
function divide(num1 : number, num2: number): number {
    return  chalk.yellow(num1 / num2);
}

calculator();
