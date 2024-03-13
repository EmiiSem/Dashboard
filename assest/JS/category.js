let menuToggle = document.querySelector('.menu-toggle');
let menu = document.querySelector('.menu');

let taxt = document.querySelector('.text_title');
let heads = document.querySelector('.heads');
let gistograms = document.querySelector('.gistograms');
let p2 = document.querySelector('.p2');



menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    menuToggle.classList.toggle('close');
    
    taxt.classList.toggle('hiidden');
    heads.classList.toggle('closing');
    gistograms.classList.toggle('hiidden');

    p2.classList.toggle('slow');
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