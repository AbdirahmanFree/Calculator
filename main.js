
let allClear = true;
let operating = false;
let firstNumber = "0";
let secondNumber = "";
let currentOperator = null;
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
        firstNumber = "";
    }
    display.textContent += number;
    if(!operating){
            firstNumber += number;
            console.log(firstNumber);
        }
        else {
            display.textContent = number;
            secondNumber += number;
            currentOperator.style.backgroundColor = "#FF9500"
            currentOperator.style.color = "white";

        }
        console.log(`first number: ${firstNumber}`)
        console.log(`second number: ${secondNumber}`)
}

function clear(){
    if(!allClear){
        display.textContent = "0";
        allClear = true;
        clearBtn.textContent = "AC"
        if(operating) {
            secondNumber = "";
            operating = false;
        }
        else{
            firstNumber = "";
        }
    }
    else {
        display.textContent = "";
        currentOperator.style.backgroundColor = "#FF9500";
        currentOperator.style.color = "white";
        currentOperator = null;
    }
}

function decimal(){
    if(display.textContent.includes(".")){
        return;
    }
    allClear = false;
    clearBtn.textContent = "C";
    display.textContent += ".";

    if (operating){
        secondNumber += ".";
    }
    else{
        firstNumber += ".";
    }
}

function zero(){
    if(allClear){
        return;
    }
    display.textContent += "0";
    if (operating){
        secondNumber += "0";
    }
    else{
        firstNumber += "0";
    }
}

function clickOperator(operator){
    if (currentOperator != null){
        currentOperator.style.backgroundColor = "#FF9500";
        currentOperator.style.color = "white";
    }
    operating = true;
    operator.style.backgroundColor = "white";
    operator.style.color = "#FF9500";
    currentOperator = operator;
    console.log(currentOperator)
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

const decimalBtn = document.querySelector("#decimal");
decimalBtn.addEventListener("click",() => decimal());
decimalBtn.addEventListener("mousedown", () => decimalBtn.style.backgroundColor = "#AAAAAA");
decimalBtn.addEventListener("mouseup", () => decimalBtn.style.backgroundColor = "#505050");

const zeroBtn = document.querySelector("#zero");
zeroBtn.addEventListener("click", () => zero());
zeroBtn.addEventListener("mousedown", () => zeroBtn.style.backgroundColor = "#AAAAAA");
zeroBtn.addEventListener("mouseup", () => zeroBtn.style.backgroundColor = "#505050");

const operators = document.querySelectorAll(".operator");
for(let i = 0; i< operators.length; i++){
    let operator = operators[i]
    operator.addEventListener("click", () => clickOperator(operator))
}




