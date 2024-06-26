let btn = document.querySelectorAll(".numBtn");
let operatorBtn = document.querySelectorAll(".operatorBtn");
let display = document.querySelector(".display");
let answer = document.querySelector("#equals");
let clear = document.querySelector("#clear");

let displayValue1 = "";
let displayValue2 = "";
let operationValue;
let operationClicked = false;
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
  operationValue = null;
  operationClicked = false;
  display.textContent = "0";
  console.log(displayValue1);
  console.log(displayValue2);
}

function displayNumber(e) {
  let value = e.target.value;
  if (!operationClicked) {
    displayValue1 += value;
    display.textContent = displayValue1;
    console.log(`Value 1: ${displayValue1}`);
  } else {
    displayValue2 += value;
    display.textContent = displayValue2;
    console.log(`Value 2: ${displayValue2}`);
  }
}

function operation(e) {
  if (displayValue1 && displayValue2) {
    operate();
  }
  operationClicked = true;
  operationValue = e.target.value;
  console.log(`Operation: ${operationValue}`);
}

function add(num1, num2) {
  // let sum = num1 + num2;
  result = num1 + num2;
  console.log(result);
  return result;
}

function subtract(num1, num2) {
  // let difference = num1 - num2;
  result = num1 - num2;
  console.log(result);
  return result;
}

function multiply(num1, num2) {
  result = num1 * num2;
  console.log(result);
  return result;
}

function divide(num1, num2) {
  result = num1 / num2;
  if (num2 === 0) {
    display.textContent = "Hell No!";
    return null;
  } else {
    console.log(result);
    return result;
  }
}

function operate() {
  let number1 = Number(displayValue1);
  let number2 = Number(displayValue2);
  let op = operationValue;
  if (!number2 && op !== "÷") return;
  if (op === "+") {
    result = add(number1, number2);
  } else if (op === "-") {
    result = subtract(number1, number2);
  } else if (op === "X") {
    result = multiply(number1, number2);
  } else if (op === "÷") {
    result = divide(number1, number2);
  }
  displayValue1 = result.toString();
  displayValue2 = "";
  display.textContent = result;
  operationClicked = false;
  console.log(`Result: ${result}`);
}
