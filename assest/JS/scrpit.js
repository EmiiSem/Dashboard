let menuToggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');

let text = document.querySelector('.title_text');
let gap = document.querySelector('.grap');
let grapss = document.querySelector('.graps');
let graphics = document.querySelector('.graphics');
let heads = document.querySelector('.heads');

let taxt = document.querySelector('.text_title');



menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuToggle.classList.toggle('close');
    text.classList.toggle('hiidden');
    gap.classList.toggle('hiidden');
    grapss.classList.toggle('close');
    graphics.classList.toggle('hiidden');
    heads.classList.toggle('closing');
    
    taxt.classList.toggle('hiidden');
});


let dropdownHidden = document.getElementById('drop_hidden');
let dropdown = document.querySelector('.drop');

dropdownHidden.addEventListener('click', () => {
    dropdown.classList.toggle('hiddenTwo');
});

let dropdownHiddenTwo = document.getElementById('drop_hidden_two');
let dropdown_two = document.querySelector('.drop_two');

dropdownHiddenTwo.addEventListener('click', () => {
    dropdown_two.classList.toggle('hiddenFree');
});