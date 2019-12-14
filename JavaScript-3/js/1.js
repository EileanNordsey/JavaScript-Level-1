'use strict'

for (let i = 0; i < 11; i++) {
    if (i == 0) {
        alert(i + " - это ноль!");
    } else if (i == 1 || i == 3 || i == 5 || i == 7 || i == 9) {
        alert(i + " - это нечетное число!");
    } else  {
        alert(i + " - это четное число!");
    }
}