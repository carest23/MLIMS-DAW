"use strict";

document.addEventListener('DOMContentLoaded', checkboxes);

function checkboxes() {
    let buttonSelectOn = document.querySelector('#selAll');
    let buttonSelectOff = document.querySelector('#desAll');
    let buttonCreate = document.querySelector('#create');

    let boxes = document.createElement('ul');
    document.body.append(boxes);

    buttonSelectOn.addEventListener('click', selectOn);
    buttonSelectOff.addEventListener('click', selectOff);
    buttonCreate.addEventListener('click', create);


    function create() {
        var checkbox = document.createElement('input');
        var rand = Math.floor(Math.random() * 11);
        let label = document.createElement('label');
        let HistList = document.createElement('li');
        label.innerHTML = rand;
        checkbox.type = 'checkbox';
        checkbox.id = 'check';
        checkbox.value = rand;
        boxes.appendChild(HistList);
        HistList.appendChild(checkbox);
        HistList.appendChild(label);
    }

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
