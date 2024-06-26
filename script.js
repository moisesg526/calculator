let btn = document.querySelectorAll(".numBtn");
let operatorBtn = document.querySelectorAll(".operatorBtn");
let display = document.querySelector(".display");
let answer = document.querySelector("#equals");
let clear = document.querySelector("#clear");

let displayValue1 = "";
let displayValue2 = "";
let operationValue;
let operationClicked = false;
let clickCount = 0;
let result;

Array.from(btn).forEach((button) => {
  button.addEventListener("click", displayNumber);
});

Array.from(operatorBtn).forEach((button) => {
  button.addEventListener("click", operation);
});

answer.addEventListener("click", operate);
clear.addEventListener("click", clearScreen);

function clearScreen() {
  displayValue1 = "";
  displayValue2 = "";
  display.textContent = "0";
  console.log(displayValue1);
  console.log(displayValue2);
}

function displayNumber(e) {
  let value = e.target.value;
  if (operationClicked === false) {
    displayValue1 += value;
    display.textContent = displayValue1;
    console.log(`Value 1: ${displayValue1}`);
  } else if (operationClicked === true) {
    displayValue2 += value;
    display.textContent = displayValue2;
    console.log(`Value 2: ${displayValue2}`);
  }
}

function operation(e) {
  if (clickCount > 1) {
    operate();
    displayValue1 = result;
    displayValue2 = "";
    display.textContent = displayValue1;
  }
  operationClicked = true;
  clickCount++;
  operationValue = e.target.value;
  console.log(`Operation: ${operationValue}, Click count: ${clickCount}`);
}

/// create multiple operations function to run when the operation buttons are clicked multiple tinmes
// function mulpitpleOperations() {
//   result = operate();
//   console.log(result);
//   displayValue1 = result;
//   displayValue2 = [];
// }

function add(num1, num2) {
  // let sum = num1 + num2;
  result = num1 + num2;
  console.log(result);
  display.textContent = result;
  operationClicked = false;
  return result;
}

function subtract(num1, num2) {
  // let difference = num1 - num2;
  result = num1 - num2;
  console.log(result);
  display.textContent = result;
  operationClicked = false;
  displayValue1 = result;
  return result;
}

function multiply(num1, num2) {
  // let product = num1 * num2;
  result = num1 * num2;
  console.log(result);
  display.textContent = result;
  operationClicked = false;
  displayValue1.push(result);
  console.log("Hello " + displayValue1);
  return result;
}

function divide(num1, num2) {
  // let quotient = num1 / num2;
  result = num1 / num2;
  if (num2 === 0) {
    display.textContent = "Hell No!";
  } else {
    display.textContent = result;
    operationClicked = false;
    displayValue1 = result;
  }
  console.log(result);
  return result;
}

function operate(number1, op, number2) {
  number1 = Number(displayValue1);
  number2 = Number(displayValue2);
  op = operationValue;
  if (op === "+") {
    clickCount = 0;
    displayValue1 = "";
    displayValue2 = "";
    return add(number1, number2);
  } else if (op === "-") {
    clickCount = 0;
    displayValue1 = "";
    displayValue2 = "";
    return subtract(number1, number2);
  } else if (op === "X") {
    clickCount = 0;
    displayValue1 = "";
    displayValue2 = "";
    return multiply(number1, number2);
  } else if (op === "÷") {
    clickCount = 0;
    displayValue1 = "";
    displayValue2 = "";
    return divide(number1, number2);
  }
}
