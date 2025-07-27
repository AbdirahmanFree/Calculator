let allClear = true;
let operating = false;
let firstNumber = 0;
let secondNumber = 0;
function add(num1, num2){
    return Number(num1) + Number(num2);
}

function subtract(num1, num2){
    return Number(num1) - Number(num2);
}

function multiply(num1, num2){
    return Number(num1) * Number(num2);
}

function divide(num1, num2){
    return Number(num1) / Number(num2);
}

function operate(operator, num1, num2){
    return operator(num1, num2);
}

function displayNumber(number){
    if(allClear){
        allClear = false;
        clearBtn.textContent = "C";
        display.textContent = "";
    }
    display.textContent += number;
}

function clear(){
    if(!allClear){
        display.textContent = "0";
        allClear = true;
        clearBtn.textContent = "AC"
    }
}



const display = document.querySelector("#display")

const numbers = document.querySelectorAll(".number")
for (let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    number.addEventListener("click", ()=> displayNumber(number.textContent))
    number.addEventListener("mousedown", () => number.style.backgroundColor = "#AAAAAA")
    number.addEventListener("mouseup", () => number.style.backgroundColor = "#505050")
    
}

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click",() => clear())
clearBtn.addEventListener("mousedown", () => clearBtn.style.backgroundColor = "#F4F4F2")
clearBtn.addEventListener("mouseup", () => clearBtn.style.backgroundColor = "#D4D4D2")


