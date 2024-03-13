let menuToggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');
// let graphics = document.querySelector('.container');
let text = document.querySelector('.title_text');
let grap = document.querySelector('.grapss');
let gap = document.querySelector('.grap');
let grapss = document.querySelector('.graps');
let heads = document.querySelector('.heads');

let taxt = document.querySelector('.text_title');



menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuToggle.classList.toggle('close');
    // graphics.classList.toggle('close');
    grap.classList.toggle('hiidden');
    text.classList.toggle('hiidden');
    heads.classList.toggle('closing');
    gap.classList.toggle('hiidden');
    grapss.classList.toggle('hiidden');
    
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