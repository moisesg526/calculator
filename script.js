let btn = document.querySelectorAll(".numBtn");
let operatorBtn = document.querySelectorAll(".operatorBtn");
let display = document.querySelector(".display");
let answer = document.querySelector(".equals");

// let firstClick = true;

let displayValue = [];
let operationValue;

Array.from(btn).forEach((button) => {
  button.addEventListener("click", displayNumber);
});

Array.from(operatorBtn).forEach((button) => {
  button.addEventListener("click", operation);
});

answer.addEventListener("click", operate);

// function mathProblem(e) {
//   let value = e.target.value;
//   if (value === "+") {
//     console.log(`value : ${Number(displayValue) + Number(displayValue)}`);
//   }
// }

function displayNumber(e) {
  let value = e.target.value;
  if (
    e.target.value !== "÷" ||
    e.target.value !== "X" ||
    e.target.value !== "-" ||
    e.target.value !== "+"
  ) {
    displayValue.push(value);
    display.textContent = displayValue;
    console.log(displayValue);
  } else if (e.target.value1 == "operation") {
    operationValue = e.target.value;
    console.log(operationValue);
  }
}

function operation(e) {
  let value = e.target.value;
  operationValue = value;
  console.log(value);
}

function add(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function subtract(num1, num2) {
  let difference = num1 - num2;
  return difference;
}

function multiply(num1, num2) {
  let product = num1 * num2;
  return product;
}

function divide(num1, num2) {
  let quotient = num1 / num2;
  return quotient;
}

function operate(number1, operator, number2) {
  if (operator === "+") {
    return add(number1, number2);
  } else if (operator === "-") {
    return subtract(number1, number2);
  } else if (operator === "*") {
    return multiply(number1, number2);
  } else if (operator === "/") {
    return divide(number1, number2);
  }
  console.log("operate is running");
}
