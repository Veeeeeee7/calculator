var calculation = "";
var operationsIndex = [];
var numbers = [];
var solution;

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
    numbers = getNumbers(calculation, operationsIndex);
    solution = calculate(operationsIndex, numbers);
    answer.innerHTML = solution;
    calculation = "";
};

function getOperations(calculationString) {
    calculationString.split("");
    let index = [];
    for (let i = 0; i < calculationString.length; i++) {
        if (isNaN(calculationString[i])) {
            index.push({ position: i, operation: calculationString[i] });
        }
    }
    return index;
}

function getNumbers(calculationString, operationIndex) {
    let temp = [];
    temp.push(calculationString.substring(0, operationIndex[0].position));
    for (let i = 1; i < operationIndex.length; i++) {
        temp.push(
            calculationString.substring(
                operationIndex[i - 1].position + 1,
                operationIndex[i].position
            )
        );
    }
    temp.push(
        calculationString.substring(
            operationIndex[operationIndex.length - 1].position + 1,
            calculationString.length + 1
        )
    );
    for (let i = 0; i < temp.length; i++) {
        temp[i] = parseInt(temp[i]);
    }
    return temp;
}

function calculate(operations, numbers) {
    let multiplicationDivision = [];
    let additionSubtraction = [];
    let tempIndex = 0;
    for (let i = 0; i < operations.length; i++) {
        if (operations[i].operation == "*") {
            multiplicationDivision.push({ position: i, operation: "*" });
        }
        if (operations[i].operation == "/") {
            multiplicationDivision.push({ position: i, operation: "/" });
        }
        if (operations[i].operation == "+") {
            additionSubtraction.push({ position: i, operation: "+" });
        }
        if (operations[i].operation == "-") {
            additionSubtraction.push({ position: i, operation: "-" });
        }
    }

    for (let i = 0; i < multiplicationDivision.length; i++) {
        while (
            numbers[multiplicationDivision[i].position - tempIndex] == null
        ) {
            tempIndex++;
        }
        if (multiplicationDivision[i].operation == "*") {
            numbers[multiplicationDivision[i].position - tempIndex] *=
                numbers[multiplicationDivision[i].position + 1];
            numbers[multiplicationDivision[i].position + 1] = null;
        } else if (multiplicationDivision[i].operation == "/") {
            numbers[multiplicationDivision[i].position - tempIndex] /=
                numbers[multiplicationDivision[i].position + 1];
            numbers[multiplicationDivision[i].position + 1] = null;
        }
    }

    for (let i = 0; i < additionSubtraction.length; i++) {
        while (numbers[additionSubtraction[i].position - tempIndex] == null) {
            tempIndex++;
        }
        if (additionSubtraction[i].operation == "+") {
            numbers[additionSubtraction[i].position - tempIndex] +=
                numbers[additionSubtraction[i].position + 1];
            numbers[additionSubtraction[i].position + 1] = null;
        } else if (additionSubtraction[i].operation == "-") {
            numbers[additionSubtraction[i].position - tempIndex] -=
                numbers[additionSubtraction[i].position + 1];
            numbers[additionSubtraction[i.position] + 1] = null;
        }
    }
    return numbers[0];
}
