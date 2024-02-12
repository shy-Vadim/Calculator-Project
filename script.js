// VARIABLES/CONSTS
let number1 = ""
  , number2 = ""
  , operator;

//DOM
const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const controls = document.querySelectorAll(".controls")

numbers.forEach((currentNumber) => {
  currentNumber.addEventListener("click", () => {
    if (number1.length < 8 && operator == undefined) {
      number1 += currentNumber.id
      calculator.display = number1
      updateDisplay()
    } else if (number2.length < 8 && operator !== undefined) {
      number2 += currentNumber.id
      calculator.display = number2
      updateDisplay()
    }
  })
})

operators.forEach((currentOperator) => {
  currentOperator.addEventListener("click", () => {
    if (operator == undefined) {
      operator = calculator[currentOperator.id]
    }
  })
})

//OBJECTS
const calculator = {
  display: "0",

  add(num1, num2) {
    return +num1 + +num2
  },

  substract(num1, num2) {
    return +num1 - +num2
  },

  multiply(num1, num2) {
    return +num1 * +num2
  },

  divide(num1, num2) {
    return +num1 / +num2
  },

  operate() {
    if (number1 != undefined && number2 != undefined){
      number1 = String(operator(number1, number2))
      number2 = ""
      operator = undefined
      calculator.display = number1
      updateDisplay()
    } else {
      number1 = ""
      number2 = ""
      operator = undefined
      calculator.display = NaN
      updateDisplay()
    }
  },
}

// FUNCTIONS
function updateDisplay() {
  if (calculator.display.length <= 8) {
    display.textContent = calculator.display
  } else {
    display.textContent = NaN
  }
}
