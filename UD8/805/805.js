"use strict";

document.addEventListener('DOMContentLoaded', checkboxes);

function checkboxes() {
    let buttonSelectOn = document.querySelector('#selAll');
    let buttonSelectOff = document.querySelector('#desAll');
    let buttonCreate = document.querySelector('#create');

    let boxes = document.createElement('div');
    document.body.append(boxes);

    buttonSelectOn.addEventListener('click', selectOn);
    buttonSelectOff.addEventListener('click', selectOff);
    buttonCreate.addEventListener('click', create);


    function create() {
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'check';
        boxes.appendChild(checkbox);
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
