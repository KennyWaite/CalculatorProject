// // toggle
// styleBtn.addEventListener("click", () => {
//     body.classList.toggle("body--nightmode");
// });

// const allButtons = document.querySelectorAll(".button");

//math function to call upon - (+/-* the display number plus the next number)
const mathFunction = (firstNumber, operation, secondNumber) => {
    if (operation === "x") {
        return (result = parseFloat(firstNumber) * parseFloat(secondNumber));
    } else if (operation === "+") {
        return (result = parseFloat(firstNumber) + parseFloat(secondNumber));
    } else if (operation === "-") {
        return (result = parseFloat(firstNumber) - parseFloat(secondNumber));
    } else result = parseFloat(firstNumber) / parseFloat(secondNumber);
};

//accessing the DOM
const allNums = document.querySelectorAll(".numbers__button");
const display = document.querySelector("#calcDisplay");
const operators = document.querySelectorAll(".functions__btn");
const equal = document.querySelector(".equals");
const clear = document.querySelector("#clear");

// variables to reference

display.value = "";
let firstNumber = "";
let secondNumber = "";
let finalresult = "";
let operation = "";
let dot = false;

// make numbers appear in display and only allow one dot
allNums.forEach((number) => {
    number.addEventListener("click", (event) => {
        if (event.target.innerText === "." && !dot) {
            dot = true;
        } else if (event.target.innerText === "." && dot) {
            return;
        }
        display.value += event.target.innerText;
    });
});

//options for when a (+, -, X or / is pressed)
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        // if display has no numbers in it return alert
        if (display.value === "") {
            return alert("Please input numbers before pressing operator");
        }
        //if display has number has number and operators add them together or whatever function is
        console.log(event.target.innerText);
        operation = event.target.innerText;
        firstNumber = display.value;
        display.value = "";
    });
});

equal.addEventListener("click", (event) => {
    if (firstNumber && operation && display.value) {
        display.value = mathFunction(firstNumber, operation, display.value);
        firstNumber = "";
        operation = "";
    } else alert("Please enter calculation in correct order");
});

//clear all function to call upon - clears displa and variables to empty string/0
const clearFunct = (info) => {
    clear.addEventListener("click", (event) => {
        display.innerText = "0";
        displayNum = "";
        finalresult = "";
    });
};
