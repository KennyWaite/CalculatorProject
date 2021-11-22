// // toggle
// styleBtn.addEventListener("click", () => {
//     body.classList.toggle("body--nightmode");
// });

// const allButtons = document.querySelectorAll(".button");

const allBtns = document.querySelectorAll('.numbers__button');

allBtns.forEach( element => {
  element.addEventListener('click', myFunction);
})

function myFunction(e) {
    const value = e.target.value;
    document.getElementById("calcDisplay").innerHTML = value


//accessing the DOM
const allNums = document.querySelectorAll(".numbers__button");
const display = document.querySelector("#calcDisplay");
const operator = document.querySelectorAll(".functions_btn");
const equal = document.querySelector(".equals");
const clear = document.querySelector("#clear");

allNums.forEach( element => {
    element.addEventListener('click', myFunction);
  })

  function myFunction(e) {
    const value = e.target.value;
    document.getElementById("demo").innerHTML = value

// variables to reference
let displayNum = "";
let finalresult = "";
let operation = "";
let dot = false;

// make numbers appear in display and only allow one dot
const updateDisplay = () => {
    displayNum = allNums.value.innerText;
    display.value = displayNum;
    return display.value;
};

allNums.forEach((number) => {
    number.addEventListener("click", (event) => {
        number = event.target.innerText;
        // display.innerText += number;
        updateDisplay(number);
        // if (event.target.innerText === "." && !dot) {
        //     dot = true;
        // } else if (event.target.innerText === "." && dot) {
        //     return;
        // }
        // displayNum = event.target.innerText;

        // number = event.target.innerText;
        // display.innerText += displayNum;
        // displayNum += event.target.innerText;
        // display.innerText += displayNum.innerText;
    });
});

// allNums.forEach((number) => {
//     number.addEventListener("click", (event) => {
//         displayNum = event.target.innerText;
//         display.innerText += displayNum.innerText;
//     });
// });

//options for when a (+, -, X or / is pressed)
operator.forEach((operations) => {
    operations.addEventListener("click", (event) => {
        // if display has no numbers in it return alert
        if (!display.innerText) {
            alert("Please input numbers before pressing operator");
            clearFunct(display.innerText);
        }
        //if display has number has number and operators add them together or whatever function is
        else if (displayNum && operation) {
            return mathFunction();
        }
    });

    //clear all function to call upon - clears displa and variables to empty string/0
    const clearFunct = (info) => {
        clear.addEventListener("click", (event) => {
            display.innerText = "0";
            displayNum = "";
            finalresult = "";
        });
    };

    //math function to call upon - (+/-* the display number plus the next number)

    const mathFunction = () => {
        if (operation === "x") {
            result = parseFloat(display.innerText) * parseFloat(displayNum);
        } else if (operation === "+") {
            result = parseFloat(display.innerText) + parseFloat(displayNum);
        } else if (operation === "-") {
            result = parseFloat(display.innerText) - parseFloat(displayNum);
        } else result = parseFloat(display.innerText) / parseFloat(displayNum);
    };

    //math function to call upon - (+/-* the display number plus the next number)
    equal.addEventListener("click", (event) => {
        if (displayNum && operator && displayNum) {
            result = display.innerText;
            return result;
        } else alert("Please enter calculation in correct order");
    });
});

// allButtons.addEventListener('click', () => {
//         display.addNumber(button.innerText)
//         calculator.updateDisplay()
// }

// allButtons.addEventListener("click", event => {
//     const key = event.target;
//     const keyVal = key.textContent;
//     const displayVal = display.textContent;

//     display.textContent = keyVal;
// };

// const addNumber = (number) => {
//     allButtons.addEventListener("click", event => {
//     display.append()
// },

// const clear =

// allButtons.addEventListener('click', () => {
//     display.addNumber(button.innerText)
//     calculator.updateDisplay()
// }

// const appendTextElement = (elementType, text, parentNode) => {
//     // Create new element with a specific type
//     const newElement = document.createElement(elementType);
//     // Creates a text node
//     const textNode = document.createTextNode(text);
//     // Attach the text node to the newly created element
//     newElement.appendChild(textNode);
//     // Attach the new element to a parent element
//     parentNode.appendChild(newElement);
// };

// addBtn.addEventListener("click", () => {
//     if (inputTask.value === "") {
//         return alert("Give me a task!");
//     }

//     if (document.getElementById("placeholderPara")) {
//         removeElement("#tasks", "#placeholderPara");
//     }

//     appendTextElement("p", inputTask.value, document.querySelector("#tasks"));
//     inputTask.value = "";
//     console.log(document.getElementById("tasks").childNodes);
//
