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
    } else {
        return (result = parseFloat(firstNumber) / parseFloat(secondNumber));
    }
};

//accessing the DOM
const allNums = document.querySelectorAll(".numbers__button");
const display = document.querySelector("#calcDisplay");
const operators = document.querySelectorAll(".functions__btn");
const equal = document.querySelector(".equals");
const clearbtn = document.querySelector("#clear");
console.log(clear);

// variables to reference

display.value = "";
let firstNumber = "";
let secondNumber = "";
let result = "";
let operation = "";

// make numbers appear in display and only allow one dot
allNums.forEach((number) => {
    number.addEventListener("click", (event) => {
        if (
            display.value.includes("+") ||
            display.value.includes("-") ||
            display.value.includes("x") ||
            display.value.includes("÷")
        ) {
            display.value = "";
        }
        if (!display.value.includes(".") || event.target.innerText !== ".") {
            display.value += event.target.innerText;
        }
    });
});

//options for when a (+, -, X or / is pressed)
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        // if display has no numbers in it return alert
        if (display.value === "") {
            return alert("Please input numbers before pressing operator");
        }
        //dont press operator more than once;
        if (
            display.value.includes("+") ||
            display.value.includes("-") ||
            display.value.includes("*") ||
            display.value.includes("÷")
        ) {
            alert("Only one operator can be handled at a time");
        }
        //if display has number and operators add them together or whatever function is

        //When clicking on operator, the value on the screen will be saved as firstNumber
        firstNumber = display.value;

        // Then saving the operation to be whatever operand we have clicked
        operation = event.target.innerText;

        // We add the operand to the displayed value
        display.value = operation;
    });
});

equal.addEventListener("click", (event) => {
    if (firstNumber && operation && display.value) {
        result = mathFunction(firstNumber, operation, display.value);
        display.value = result;
        firstNumber = "";
        operation = "";
    } else alert("Please enter calculation in correct order");
});

//clear all function to call upon - clears displa and variables to empty string/0

clearbtn.addEventListener("click", () => {
    console.log("Clear has been clicked");
    display.value = "";
    displayNum = "";
    result = "";
});
