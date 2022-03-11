"use strict";

document.addEventListener('DOMContentLoaded', checkboxes);

function checkboxes() {
    let buttonSelectOn = document.querySelector('#selAll');
    let buttonSelectOff = document.querySelector('#desAll');
    let buttonCreate = document.querySelector('#create');
    let inputNumber = document.querySelector('#num');

    let boxes = document.createElement('ul');
    document.body.append(boxes);

    buttonSelectOn.addEventListener('click', selectOn);
    buttonSelectOff.addEventListener('click', selectOff);
    buttonCreate.addEventListener('click', call);
    inputNumber.value = Math.floor(Math.random() * 100);



    function call(){
        let inputNum = document.querySelector("#num");
        removeCheckboxes();
        generateCheckboxes(inputNum.value);
    }
    
    function removeCheckboxes() {
        let checkList = document.querySelector("#boxes");
        let listItems = checkList.querySelectorAll('li');
    
        for (let i = 0; i < listItems.length; i++) {
            let listItem = listItems[i];        
            listItem.remove();
        }
    }
    
    function generateCheckboxes(number) {
        let checkList = document.querySelector("#boxes");
    
        for (let i = 0; i < number; i++) {
            let listItem = document.createElement("li");        
            checkList.appendChild(listItem);
    
            let number = random(0,99);
    
            let checkboxLabel = document.createElement('label');
            let checkboxInput = document.createElement('input');
            checkboxInput.setAttribute("type", "checkbox");
            checkboxInput.type = "checkbox";
            checkboxInput.value = number;
    
            boxes.appendChild(listItem);
            listItem.appendChild(checkboxInput);
            listItem.appendChild(checkboxLabel);
        }
    
    }

   /* function create() {
        var checkbox = document.createElement('input');
        var rand = Math.floor(Math.random() * 11);
        let label = document.createElement('label');
        let HistList = document.createElement('li');
        let multiplier = Number(inputNumber.value);

        label.innerHTML = rand;
        checkbox.type = 'checkbox';
        checkbox.id = 'check';
        checkbox.value = rand;
        for (var i = 0; i < rand; i++) {
            boxes.appendChild(HistList);
            HistList.appendChild(checkbox);
            HistList.appendChild(label);
        }
    }*/

    function selectOn() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    }


    function selectOff() {
        var checkboxes = document.querySelectorAll('input[type="checkbox"]');
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}
