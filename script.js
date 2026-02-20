// DOM elements
const calculatorForm = document.getElementById("calculator-form");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorSelect = document.getElementById("operator");
const resultDisplay = document.getElementById("result");
const clearBtn = document.getElementById("clear-btn");
const heading = document.getElementById("dynamic-message");
heading.textContent = "Welcome to Shante's Developer Journey 🚀";
// App state object
const appState = {
  num1: 0,
  num2: 0,
  operator: "+",
  result: null
};

// Pure calculation function
const calculate = (num1, num2, operator) => {
  switch (operator) {
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": return num2 === 0 ? "Cannot divide by zero." : num1 / num2;
    default: return "Invalid operator";
  }
};

// Update DOM with result
const updateResult = message => resultDisplay.textContent = message;

// Handle form submission
calculatorForm.addEventListener("submit", e => {
  e.preventDefault(); // Prevent page refresh

  const value1 = Number(num1Input.value);
  const value2 = Number(num2Input.value);
  const operator = operatorSelect.value;

  // Update app state
  appState.num1 = value1;
  appState.num2 = value2;
  appState.operator = operator;

  appState.result = calculate(value1, value2, operator);

  // Update the UI
  updateResult("Result: " + appState.result);
});

// Clear button resets everything
clearBtn.addEventListener("click", () => {
  num1Input.value = "";
  num2Input.value = "";
  operatorSelect.value = "+";
  appState.num1 = 0;
  appState.num2 = 0;
  appState.operator = "+";
  appState.result = null;
  updateResult("Result will appear here");
});