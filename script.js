// VARIABLES/CONSTS
let number1 = ""
  , number2 = ""
  , operator;

//DOM
const display = document.querySelector("#display")
  , numbers = document.querySelectorAll(".number")
  , operators = document.querySelectorAll(".operator")
  , reset = document.querySelector("#reset")
  , operate = document.querySelector("#operate");

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
    } else {
      calculator.operate()
      operator = calculator[currentOperator.id]
    }
  })
})

reset.addEventListener("click", () => calculator.reset())
operate.addEventListener("click", () => {if (operator != undefined) calculator.operate()})

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
    if (num2 == "0") return "ERROR!"
    return +num1 / +num2
  },

  operate() {
    if (number1 != "" && number2 != ""){
      number1 = String(operator(number1, number2))
      number2 = ""
      operator = undefined
      calculator.display = number1
      updateDisplay()
    } else if (number1 != "" && number2 == "") {
      number1 = String(operator(number1, number1))
      calculator.display = number1
      updateDisplay()
    } else {
      number1 = ""
      number2 = ""
      operator = undefined
      calculator.display = "0"
      updateDisplay()
    }
  },

  reset() {
    number1 = ""
    number2 = ""
    operator = undefined
    calculator.display = "0"
    updateDisplay()
  },
}

// FUNCTIONS
function updateDisplay() {
  let result = calculator.display

  if (result.length <= 8) {
    display.textContent = result
  } else if (result.indexOf(".") != -1 && result.indexOf(".") < 6) {
    display.textContent = result.slice(0, 8)
  } else {
    display.textContent = NaN
  }
}
