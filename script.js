'use strict'

/*
**  Max and min values
*/
const maxWidth = 800;
const maxHeight = 800;
const minWidth = 100;
const minHeight = 100;
const errorMessage = 'Введённое значение должно быть в диапазоне от 100 до 800';

/*
**  DOM elements
*/
let widthInput = document.querySelector('#width-input');

let heightInput = document.querySelector('#height-input');

let randomColorButton = document.querySelector('#random-color-button');

let square = document.querySelector('.square');


/*
**  Events' handlers
*/
widthInput.onchange = () => {
    let width = +widthInput.value;

    if(width >= minWidth && width <= maxWidth) {
        changeWidth(square, width);
    } else {
        alert(errorMessage);
    }
}

heightInput.onchange = () => {
    let height = +heightInput.value;

    if(height >= minHeight && height <= maxHeight) {
        changeHeight(square, height);
    } else {
        alert(errorMessage);
    }
}

randomColorButton.onclick = () => {
    changeBackgroundColor(square, generateRandomColor());
}

/*
**  Set DOM element width
*/
function changeWidth(DOMObject, value) {
    DOMObject.style.width = `${value}px`;
}

/*
**  Set DOM element height
*/
function changeHeight(DOMObject, value) {
    DOMObject.style.height = `${value}px`;
}

/*
**  Set DOM element background color
*/
function changeBackgroundColor(DOMObject, value) {
    DOMObject.style.backgroundColor = value;
}

/*
**  Get random rgb color
*/
function generateRandomColor() {
    return `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
}

/*
**  Create random int in [min, max]
*/
function randomInt(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
}
