let money = parseInt(prompt("How much is the fish?.."));
alert(`The amount ${money} ${correctCurrency} is successfully transered!`);

function getPenultimateDigit(num) {
    num = String(num);
    let Digit = num.charAt(num.length - 2);
    if (digit !== "") {
        return Number(Digit);
    }
    return null;
}

function correctCurrency(num) {
    let penultimate = getPenultimateDigit(num);
    if (penultimate == 1) {
        return "рублей";
    }
    num = String(num);
    let lastDigit = Number(num.charAt(num.length - 1));
    switch (lastDigit) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return "рублей";
        case 1:
            return "рубль";
        case 2:
        case 3:
        case 4:
            return "рубля";
    }
}