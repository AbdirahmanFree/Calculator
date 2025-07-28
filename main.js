
let allClear = true;
let operating = false;
let firstNumber = "0";
let secondNumber = "";
let currentOperator = null;
const display = document.querySelector("#display")
const clearBtn = document.querySelector("#clear");
display.textContent = "0"
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

function checkState(){
    console.log(`first number: ${firstNumber}`);
    console.log(`second number: ${secondNumber}`);
    console.log(`currentOperator: ${currentOperator}`)
    console.log(`allClear: ${allClear}`);
    console.log(`operating: ${operating}`);

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
    clearBtn.textContent = "AC";
    allClear = true;
    operating = false;
    firstNumber = "0";
    secondNumber = "";
    currentOperator = null;
    display.textContent = "0"
    currentOperator.style.backgroundColor = "#FF9500";
    currentOperator.style.color = "white";
    
    
}

function decimal(){
    if(display.textContent.includes(".")){
        return;
    }
    else {
        allClear = false;
        clearBtn.textContent = "C";
        display.textContent += ".";

        if (operating){
            secondNumber += ".";
            console.log(`second number: ${secondNumber}`)
        }
        else{
            firstNumber += ".";
            console.log(`first number: ${firstNumber}`)
        }
        
        }
    
}

function zero(){
    if(allClear ){
        return;
    }
    else if (!operating){
        firstNumber +="0";
        display.textContent += "0";
    }

    else if (operating){
        if (secondNumber == "0"){
            console.log("haaahahhaha")
            return;
        }
        else if (secondNumber == ""){
            console.log("hoho")
            display.textContent = "";
            display.textContent +="0"
            secondNumber = "0";
        }
        else {
            display.textContent += "0";
            secondNumber += "0";
        }
    }
    checkState()
    
    
}

function clickOperator(operator){
    if(operating){
        evaluate(currentOperator.id, firstNumber, secondNumber)
    }



    if (currentOperator != null){
        currentOperator.style.backgroundColor = "#FF9500";
        currentOperator.style.color = "white";
    }
    
    operator.style.backgroundColor = "white";
    operator.style.color = "#FF9500";
    currentOperator = operator;
    console.log(currentOperator)
    operating = true;
}

function evaluate(operation,num1 ,num2){
    
    
    let answer = 0;
    console.log(operation)
    if (operation == 'multiply'){
        answer = multiply(num1,num2);
    }
    else if (operation == 'add'){
        answer = add(num1,num2);
    }
     else if (operation == 'subtract'){
        answer = subtract(num1,num2);
    }
     else if (operation == 'divide'){
        answer = divide(num1,num2);
    }
    firstNumber = String(answer);
    secondNumber = "";
    display.textContent = String(answer)
    currentOperator.style.backgroundColor = "#FF9500";
    currentOperator.style.color = "white";
}

















const numbers = document.querySelectorAll(".number")
for (let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    number.addEventListener("click", ()=> displayNumber(number.textContent))
    number.addEventListener("mousedown", () => number.style.backgroundColor = "#AAAAAA")
    number.addEventListener("mouseup", () => number.style.backgroundColor = "#505050")
    
}


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

const equalBtn = document.querySelector("#equal");
equalBtn.addEventListener("click", () => evaluate(currentOperator.id, firstNumber,secondNumber))
equalBtn.addEventListener("mousedown", () => equalBtn.style.backgroundColor = "#fccd8bff");
equalBtn.addEventListener("mouseup", () => equalBtn.style.backgroundColor = "#FF9500");




