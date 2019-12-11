/* Сложение */

let a = 50;
let b = 10;

function Addition(a, b) {
    return (a + b);
    
}

/* Вычитание */

function Subtraction(a, b) {
    return (a - b);
}

/* Деление */

function Division(a, b) {
    return (a / b);
}

/* Умножение */

function Multiplication(a, b) {
    return (a * b);
}

function mathOperation(a, b, magic) {
    switch (magic) {
        case "+":
            return Addition(a, b);
        case "-":
            return Subtraction(a, b);
        case "/":
            return Division(a, b);
        case "*":
            return Multiplication(a, b);
        default:
            console.log(Error("Enter your values");
    }
}