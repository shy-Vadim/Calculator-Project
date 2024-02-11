// VARIABLES/CONSTS
let number1
  , number2
  , operator
  , displayResult = "00000000";

//DOM SELECTORS
const display = document.querySelector("#display")

// FUNCTIONS
function add(num1, num2) {
  return num1 + num2
}

function substract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function operate(num1, num2, operator) {
  return operator(num1, num2)
}

function updateDisplay() {
  display.textContent = displayResult
}