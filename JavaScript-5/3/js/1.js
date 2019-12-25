'use strict'

const modal = document.querySelector('.modal_hidden');
const closeBtn = document.querySelector('.cross');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    modal.classList.add('hidden')
});

showBtn.addEventListener('click', function () {
    modal.classList.remove('hidden')
});