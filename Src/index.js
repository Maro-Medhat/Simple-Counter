let number = 0;

const COUNTER = document.getElementById("counter");
const PLUS_BUTTON = document.getElementById("plus");
const MINUS_BUTTON = document.getElementById("minus");
const RESET_BUTTON = document.getElementById("reset");


COUNTER.textContent = number;

PLUS_BUTTON.onclick = function(){
    number++;
    COUNTER.textContent = number;
}


MINUS_BUTTON.onclick = function(){
    number--;
    COUNTER.textContent = number;
}


RESET_BUTTON.onclick = function(){
    number = 0;
    COUNTER.textContent = number;
}