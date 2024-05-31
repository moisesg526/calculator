let btn = document.querySelectorAll(".numBtn");
let operatorBtn = document.querySelectorAll(".operatorBtn");
let display = document.querySelector(".display");
let answer = document.querySelector("#equals");
let clear = document.querySelector("#clear");

let displayValue1 = [];
let displayValue2 = [];
let operationValue;
let operationClicked = false;
let clickCount = 0;

Array.from(btn).forEach((button) => {
  button.addEventListener("click", displayNumber);
});

Array.from(operatorBtn).forEach((button) => {
  button.addEventListener("click", operation);
});

answer.addEventListener("click", operate);
clear.addEventListener("click", clearScreen);

function clearScreen() {
  displayValue1 = [];
  displayValue2 = [];
  display.textContent = "0";
  console.log(displayValue1);
  console.log(displayValue2);
}

function displayNumber(e) {
  let value = e.target.value;
  if (operationClicked === false) {
    displayValue1.push(value);
    display.textContent = displayValue1.join("");
    console.log(`Value 1: ${displayValue1}`);
  } else if (operationClicked === true) {
    displayValue2.push(value);
    display.textContent = displayValue2.join("");
    console.log(`Value 2: ${displayValue2}`);
  }
}

function operation(e) {
  operationClicked = true;
  clickCount++;
  operationValue = e.target.value;
  console.log(`Operation: ${operationValue}, Click count: ${clickCount}`);
}

function add(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
  display.textContent = sum;
  operationClicked = false;
  if (clickCount === 1) {
    displayValue1 = [];
    displayValue1.push(sum);
    displayValue2 = [];
    display.textContent = displayValue1;
  }
  return sum;
}

function subtract(num1, num2) {
  let difference = num1 - num2;
  console.log(difference);
  display.textContent = difference;
  operationClicked = false;
  displayValue1 = difference;
  return difference;
}

function multiply(num1, num2) {
  let product = num1 * num2;
  console.log(product);
  display.textContent = product;
  operationClicked = false;
  displayValue1 = product;
  return product;
}

function divide(num1, num2) {
  let quotient = num1 / num2;
  console.log(quotient);
  display.textContent = quotient;
  operationClicked = false;
  displayValue1 = quotient;
  return quotient;
}

function operate(number1, op, number2) {
  number1 = Number(displayValue1.join(""));
  number2 = Number(displayValue2.join(""));
  op = operationValue;
  if (op === "+") {
    clickCount = 0;
    displayValue1 = [];
    displayValue2 = [];
    return add(number1, number2);
  } else if (op === "-") {
    clickCount = 0;
    displayValue1 = [];
    displayValue2 = [];
    return subtract(number1, number2);
  } else if (op === "X") {
    clickCount = 0;
    displayValue1 = [];
    displayValue2 = [];
    return multiply(number1, number2);
  } else if (op === "÷") {
    clickCount = 0;
    displayValue1 = [];
    displayValue2 = [];
    return divide(number1, number2);
  }
}
