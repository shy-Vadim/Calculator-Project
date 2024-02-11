// VARIABLES/CONSTS
let number1
  , number2
  , operator;

//DOM SELECTORS
const display = document.querySelector("#display")

//OBJECTS
const calculator = {
  display: "0",

  add(num1, num2) {
    return num1 + num2
  },
  
  substract(num1, num2) {
    return num1 - num2
  },
  
  multiply(num1, num2) {
    return num1 * num2
  },
  
  divide(num1, num2) {
    return num1 / num2
  },
  
  updateDisplay() {
    display.textContent = calculator.display
  },
  
  operate() {
    number1 = operator(number1, number2)
    number2 = undefined
    operator = undefined
    calculator.display = number1
    updateDisplay()
  },
}  

// FUNCTIONS

