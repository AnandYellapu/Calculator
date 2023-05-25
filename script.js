// const res = document.getElementById("result");
// const toast = document.getElementById("toast");

// function calculate(value) {
//   const calculatedValue = eval(value || null);
//   if (isNaN(calculatedValue)) {
//     res.value = "Can't divide 0 with 0";
//     setTimeout(() => {
//       res.value = "";
//     }, 1300);
//   } else {
//     res.value = calculatedValue;
//   }
// }

// // Displays entered value on screen.
// function liveScreen(enteredValue) {
//   if (!res.value) {
//     res.value = "";
//   }
//   res.value += enteredValue;
// }

// //adding event handler on the document to handle keyboard inputs
// document.addEventListener("keydown", keyboardInputHandler);

// //function to handle keyboard inputs
// function keyboardInputHandler(e) {
//   // to fix the default behavior of the browser,
//   // enter and backspace were causing undesired behavior when some key was already in focus.
//   e.preventDefault();

//   // numbers
//   if (e.key === "0") {
//     liveScreen(0);
//   } else if (e.key === "1") {
//     liveScreen(1);
//   } else if (e.key === "2") {
//     liveScreen(2);
//   } else if (e.key === "3") {
//     liveScreen(3);
//   } else if (e.key === "4") {
//     liveScreen(4);
//   } else if (e.key === "5") {
//     liveScreen(5);
//   } else if (e.key === "6") {
//     liveScreen(6);
//   } else if (e.key === "7") {
//     liveScreen(7);
//   } else if (e.key === "8") {
//     liveScreen(8);
//   } else if (e.key === "9") {
//     liveScreen(9);
//   }

//   // operators
//   if (e.key === "+") {
//     liveScreen('+');
//   } else if (e.key === "-") {
//     liveScreen('-');
//   } else if (e.key === "*") {
//     liveScreen('*');
//   } else if (e.key === "/") {
//     liveScreen('/');
//   }

//   // decimal key
//   if (e.key === ".") {
//     liveScreen('.');
//   }

//   // press enter to see the result
//   if (e.key === "Enter") {
//     calculate(res.value);
//   }

//   // backspace for removing the last input
//   if (e.key === "Backspace") {
//     const resultInput = res.value;
//     // remove the last element in the string
//     res.value = resultInput.substring(0, res.value.length - 1);
//   }
// }





const res = document.getElementById("result");
const toast = document.getElementById("toast");

// Function to check if a character is a number
function isNumber(character) {
  return !isNaN(character);
}

// Function to handle operator inputs
function handleOperator(operator) {
  if (operator === "=") {
    calculate(res.value);
  } else {
    if (res.value === "") {
      // Handle case where operator is the first input
      if (operator === "-" || operator === "+") {
        res.value += operator;
      } else {
        alert("Invalid input: Operator cannot be the first input");
      }
    } else {
      // Handle case where operator is not the first input
      const lastChar = res.value.slice(-1);
      if (isNumber(lastChar) || lastChar === ".") {
        res.value += operator;
      } else {
        alert("Invalid input: Cannot enter consecutive operators");
      }
    }
  }
}

// Function to calculate the result
function calculate(value) {
  try {
    const calculatedValue = eval(value || null);
    if (isNaN(calculatedValue)) {
      res.value = "Can't divide 0 with 0";
      setTimeout(() => {
        res.value = "";
      }, 1300);
    } else {
      res.value = calculatedValue;
    }
  } catch (error) {
    alert("Invalid expression!");
  }
}

// Displays entered value on screen.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

// Adding event listener for keydown event on the document to handle keyboard inputs
document.addEventListener("keydown", keyboardInputHandler);

// Function to handle keyboard inputs
function keyboardInputHandler(e) {
  // To fix the default behavior of the browser,
  // enter and backspace were causing undesired behavior when some key was already in focus.
  e.preventDefault();

  // Numbers
  if (isNumber(e.key)) {
    liveScreen(e.key);
  }

  // Operators
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    handleOperator(e.key);
  }

  // Decimal key
  if (e.key === ".") {
    const lastChar = res.value.slice(-1);
    if (isNumber(lastChar)) {
      liveScreen('.');
    } else {
      alert("Invalid input: Decimal point must be preceded by a number");
    }
  }

  // Press Enter to see the result
  if (e.key === "Enter") {
    calculate(res.value);
  }

  // Backspace for removing the last input
  if (e.key === "Backspace") {
    const resultInput = res.value;
    // Remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }

  // Show alert for any other key pressed
  if (!isNumber(e.key) && e.key !== "+" && e.key !== "-" && e.key !== "*" && e.key !== "/" && e.key !== "." && e.key !== "Enter" && e.key !== "Backspace") {
    alert("Only numbers and operators (+, -, *, /) are allowed");
  }
}
