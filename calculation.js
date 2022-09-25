
var calculation;
const division = 0;
const multiplication = 1;
const subtraction = 2;
const addition = 3;
var a;
var b;
var newNumber = false;
function numberCreator(number) {
    if (!newNumber) {
        a += number; 
    }
    else {
        b += number;
    }
}
function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division(a, b) {
    return a / b;
}
function functionType(operator) {
{
    if (operator == "equals") {
        newNumber = false;
    }
    else {
        newNumber = true;
    }
    if(type == division) {
        calculation = division(a,b);
    }
    else if(type == multiplication) {
        calculation = multiplication(a,b);
    }
    else if(type == subtraction) {
        calculation = subtraction(a,b);
    }
    else {
        calculation = addition(a,b);
    }
}

function returnCalcuation() {
    if(type == division) {
        calculation = division(a,b);
    }
    else if(type == multiplication) {
        calculation = multiplication(a,b);
    }
    else if(type == subtraction) {
        calculation = subtraction(a,b);
    }
    else {
        calculation = addition(a,b);
    }
    document.getElementById("answer-section").innerHTML = calculation;
}