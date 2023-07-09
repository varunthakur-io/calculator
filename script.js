// Get the display element
const display = document.querySelector('.display');

// Set the initial display value to '0' when the page is loaded
display.textContent = '0';

// Get all elements with the class "btn"
const buttons = document.getElementsByClassName('btn');

// Add event listener to each button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    // Get the clicked button value
    const buttonValue = buttons[i].textContent;
    // Handle the button value
    handleButton(buttonValue);
  });
}

// Function to handle button clicks
function handleButton(value) {
  switch (value) {
    case 'AC':
      clearDisplay();
      break;
    case 'CLR':
      removeLastCharacter();
      break;
    case '=':
      evaluateExpression();
      break;
    default:
      if (display.textContent === '0') {
        display.textContent = '';
      }
      appendToDisplay(value);
      break;
  }
}

// Function to clear the display
function clearDisplay() {
  display.textContent = '0';
}

// Function to remove the last character from the display
function removeLastCharacter() {
  if (display.textContent.length === 1) {
    display.textContent = '0';
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
}

// Function to evaluate the expression and display the result
function evaluateExpression() {
  try {
    const result = calculateResult(display.textContent);
    displayResult(result);
  } catch (error) {
    displayError();
  }
}

// Function to append the button value to the display
function appendToDisplay(value) {
  display.textContent += value;
}

// Function to calculate the result
function calculateResult(expression) {
  return eval(expression);
}

// Function to display the result
function displayResult(result) {
  if (Number.isInteger(result)) {
    display.textContent = result;
  } else {
    display.textContent = result.toFixed(2);
  }
}

// Function to display an error message
function displayError() {
  display.textContent = 'Error';
}
