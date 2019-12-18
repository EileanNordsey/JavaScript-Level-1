'use strict'

let num = prompt("Введите ваше число");

function getDigitsOfaNumber(num) {
    if(!Number.isInteger(num) || num > 999 || num < 0) {
        console.log("Значение должно быть целым числом в диапозоне 0 - 999");
        return{};
    }
    return {
        hundreds: Math.floor(num / 100),
        tens: Math.floor((num / 10) % 10),
        units: num % 10,
    }
}

console.log(getDigitsOfaNumber(num));