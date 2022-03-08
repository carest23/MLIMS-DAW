"use strict";

document.addEventListener('DOMContentLoaded', calculator);

function calculator() {
    let buttonMultiply = document.querySelector('#multiply');
    let buttonDivide = document.querySelector('#divide');
    let buttonApplication = document.querySelector('#application');
    let buttonSubtraction = document.querySelector('#subtraction');
    let buttonRandom = document.querySelector('#random');

    let inputNumber1 = document.querySelector('#num1');
    let inputNumber2 = document.querySelector('#num2');

    let history = document.createElement('ul');
    document.body.append(history);

    buttonMultiply.addEventListener('click', multiply);
    buttonDivide.addEventListener('click', divide);
    buttonApplication.addEventListener('click', application);
    buttonSubtraction.addEventListener('click', subtraction);
    buttonRandom.addEventListener('click', random);

    function multiply() {
        let Number1 = Number(inputNumber1.value);
        let Number2 = Number(inputNumber2.value);

        let HistList = document.createElement('li');
        HistList.innerHTML = `${Number1} * ${Number2} = ${Number1 * Number2}`;
        history.append(HistList);
    }

    function divide() {
        let Number1 = Number(inputNumber1.value);
        let Number2 = Number(inputNumber2.value);
        
        let HistList = document.createElement('li');

        if (inputNumber2.value == 0)
        HistList.innerHTML = `${Number1} / ${Number2} = Error!`;
        else {
               HistList.innerHTML = `${Number1} / ${Number2} = ${(Number1 + Number2).toFixed(2)}`; /*.tofixed per a establir un nombre de decimals*/
        }
        history.append(HistList);
    }

    function application() {
        let Number1 = Number(inputNumber1.value);
        let Number2 = Number(inputNumber2.value);

        let HistList = document.createElement('li');
        HistList.innerHTML = `${Number1} + ${Number2} = ${Number1 + Number2}`;
        history.append(HistList);
    }

    function subtraction() {
        let Number1 = Number(inputNumber1.value);
        let Number2 = Number(inputNumber2.value);

        let HistList = document.createElement('li');
        HistList.innerHTML = `${Number1}-${Number2} = ${Number1 - Number2}`;
        history.append(HistList);
    }

    function random() {
        inputNumber1.value = Math.floor(Math.random() * 11);
        inputNumber2.value = Math.floor(Math.random() * 11);
    }
}