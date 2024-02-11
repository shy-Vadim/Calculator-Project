// VARIABLES/CONSTS
let number1 = ""
  , number2 = ""
  , operator;

//DOM
const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const controls = document.querySelectorAll(".controls")

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    if (number1.length <= 8 && operator == undefined) {
      number1 += number.id
    }
  })
})
//OBJECTS
const calculator = {
  operation: "0",

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
   
  operate() {
    number1 = operator(number1, number2)
    number2 = ""
    operator = undefined
    calculator.operation = number1
    updateDisplay()
  },
}  

// FUNCTIONS
function updateDisplay() {
  display.textContent = calculator.operation
}
