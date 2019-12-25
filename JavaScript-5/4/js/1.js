'use strict'

const buttons = document.querySelectorAll('button');

buttons.forEach(function(button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    });
});

function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;

    const card = {
        wrap = cardNode,
        img = cardNode.querySelector('img'),
        productName = cardNode.querySelector('.products_card'),
        button = cardNode.querySelector('button'),
    };

    const textOnButton = card.button.innerText;
    if (textOnButton === 'Read More') {
        showMoreText(card);
    }

    else if (textOnButton === "Cancel") {
        hideMoreText(card);
    }
}

function showMoreText(card) {
    card.wrap.querySelector('img') = 'display: none';
    card.wrap.querySelector('.desc') = 'display: block';
    card.button.innerText = 'Cancel';
}

function hideMoreText(card) {
    card.wrap.querySelector('img') = 'block';
    card.wrap.querySelector('.desc') = 'none';
    card.button.innerText = 'Read More';
}