"use strict";

let inputNumber1 = document.querySelector('#num1');
let inputNumber2 = document.querySelector('#num2');

let buttonMultiply = document.querySelectorç('#butMult');
let buttonDivide = document.querySelectorç('#butDiv');
let buttonAddition = document.querySelectorç('#butAdd');
let buttonSubtraction = document.querySelectorç('#butSubt');

let divResult = document.querySelector("#result");


function multiply() {
    let number1 = Number(inputNumber1.value);
    let number2 = Number(inputNumber2.value);

    divResult.textContent = "Result: " + (number1 * number2);
    divResult.append(listItem);
}

function divide() {
    let number1 = Number(inputNumber1.value);
    let number2 = Number(inputNumber2.value);

    divResult.textContent = "Result: " + (number1 / number2);
    divResult.append(listItem);
}

function addition() {
    let number1 = Number(inputNumber1.value);
    let number2 = Number(inputNumber2.value);

    divResult.textContent = "Result: " + (+number1 + +number2);
    divResult.append(listItem);
}

function subtraction() {
    let number1 = Number(inputNumber1.value);
    let number2 = Number(inputNumber2.value);

    divResult.textContent = "Result: " + (number1 - number2);
    divResult.append(listItem);
}

buttonMultiply.addEventListener('click', multiply);
buttonDivide.addEventListener('click', divide);
buttonAddition.addEventListener('click', addition);
buttonSubtraction.addEventListener('click', subtraction);