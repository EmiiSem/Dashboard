let menuToggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');

let taxt = document.querySelector('.text_title');
let subtext = document.querySelector('.text_subtitle');
let gistograms = document.querySelector('.gistograms');
let gistoGrid = document.querySelector('.gisto-grid');
let heads = document.querySelector('.heads');

let p2 = document.querySelector('.p2');



menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuToggle.classList.toggle('close');
    
    taxt.classList.toggle('hiidden');
    subtext.classList.toggle('hiidden');
    gistograms.classList.toggle('hiidden');
    heads.classList.toggle('closing');
    p2.classList.toggle('slow');
    gistoGrid.classList.toggle('hiidden');
    heads.classList.toggle('closing');
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