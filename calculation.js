var calculation = "";
var operationsIndex = [];

button1.onclick = function button1Click() {
    calculation += "1";
    answer.innerHTML = calculation;
};

button2.onclick = function button2Click() {
    calculation += "2";
    answer.innerHTML = calculation;
};

button3.onclick = function button3Click() {
    calculation += "3";
    answer.innerHTML = calculation;
};

button4.onclick = function button4Click() {
    calculation += "4";
    answer.innerHTML = calculation;
};

button5.onclick = function button5Click() {
    calculation += "5";
    answer.innerHTML = calculation;
};

button6.onclick = function button6Click() {
    calculation += "6";
    answer.innerHTML = calculation;
};

button7.onclick = function button7Click() {
    calculation += "7";
    answer.innerHTML = calculation;
};

button8.onclick = function button8Click() {
    calculation += "8";
    answer.innerHTML = calculation;
};

button9.onclick = function button9Click() {
    calculation += "9";
    answer.innerHTML = calculation;
};

buttonDot.onclick = function buttonDotClick() {
    calculation += ".";
    answer.innerHTML = calculation;
};

buttonDivision.onclick = function buttonDivisionClick() {
    calculation += "/";
    answer.innerHTML = calculation;
};

buttonMultiplication.onclick = function buttonMultiplicationClick() {
    calculation += "*";
    answer.innerHTML = calculation;
};

buttonSubtraction.onclick = function buttonSubtractionClick() {
    calculation += "-";
    answer.innerHTML = calculation;
};

buttonAddition.onclick = function buttonAdditionClick() {
    calculation += "+";
    answer.innerHTML = calculation;
};

buttonEquals.onclick = function buttonEqualsClick() {
    operationsIndex = getOperations(calculation);
    console.log(getOperations(calculation));
};

function getOperations(calculationString) {
    calculationString.split("");
    let index = [];
    for (let i = 0; i < calculationString.length; i++) {
        if (isNaN(calculationString[i])) {
            index.push(i);
        }
    }
    return index;
}

// var answer;
// // const division = 0;
// // const multiplication = 1;
// // const subtraction = 2;
// // const addition = 3;
// var a;
// var b;
// var newNumber = false;
// function numberCreator(number) {
//     if (!newNumber) {
//         a += number;
//     } else {
//         b += number;
//     }
// }
// }
// function operator() {
//     if (operator == "equals") {
//         newNumber = false;
//     } else {
//         newNumber = true;
//     }
//     if (type == division) {
//         calculation = division(a, b);
//     } else if (type == multiplication) {
//         calculation = multiplication(a, b);
//     } else if (type == subtraction) {
//         calculation = subtraction(a, b);
//     } else {
//         calculation = addition(a, b);
//     }
// }

// function returnCalcuation() {
//     if (type == division) {
//         calculation = division(a, b);
//     } else if (type == multiplication) {
//         calculation = multiplication(a, b);
//     } else if (type == subtraction) {
//         calculation = subtraction(a, b);
//     } else {
//         calculation = addition(a, b);
//     }
//     document.getElementById("answer-section").innerHTML = calculation;
// }
