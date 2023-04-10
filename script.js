//get dates
// (celsius x 1,8) + 32
// (fah - 32)/1,8

const celsius = document.querySelector('#input-celsius').value;
const fahrenheit = document.querySelector('#input-fah').value;

window.addEventListener('load', ()=> celsius.focus());