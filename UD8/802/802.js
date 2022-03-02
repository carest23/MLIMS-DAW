function addition()
{
        number1 = document.getElementById("num1").value;
        number2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = +number1 + +number2;
}

function subtraction()
{
        number1 = document.getElementById("num1").value;
        number2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = number1 - number2;
}

function multiply()
{
        number1 = document.getElementById("num1").value;
        number2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = number1 * number2;
}

function divide()
{
        number1 = document.getElementById("num1").value;
        number2 = document.getElementById("num2").value;
        document.getElementById("result").innerHTML = number1 / number2;
}

function divide1()
{
        let number1 = document.querySelector('#num1').value;
        let number2 = document.querySelector('#num2').value;
        document.querySelector('#result').innerHTML = number1 / number2;
}