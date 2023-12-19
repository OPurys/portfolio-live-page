import move from "./slider.js";

// Filter

const filters = document.querySelectorAll('[data-filter]');
const categories = document.querySelectorAll('[data-category]');


for (let filter of filters) {

    filter.onclick = function (evt) {
        evt.preventDefault();
        let cat = this.getAttribute('data-filter');

        for (let i = 0; i < categories.length; i++) {
            let workCategory = categories[i].getAttribute('data-category');

            if (cat == 'all') {
                categories[i].classList.remove('hide');
            } else {
                if (workCategory != cat) {
                    categories[i].classList.add('hide');
                } else { categories[i].classList.remove('hide'); }
            }
        }
    }
}

// Modal

const modalCalls = document.querySelectorAll('[data-modal]');
const modalCloses = document.querySelectorAll('[data-close]');
const body = document.querySelector('body');
const modals = document.querySelectorAll('.modal');
const modalDialogs = document.querySelectorAll('.modal__dialog');



for (let modalCall of modalCalls) {
    modalCall.onclick = function (evt) {

        evt.preventDefault();
        let modalId = this.getAttribute('data-modal');

        document.querySelector(modalId).classList.add('show');
        body.classList.add('no-scroll');

        setTimeout(() => {
            document.querySelector(modalId).querySelector('.modal__dialog').style.transform = 'rotateX(0)';
        }, 200);

        if (modalId === '#modal_project') {
            move();
        }
    }
}

for (let modalClose of modalCloses) {
    modalClose.onclick = function (evt) {
        evt.preventDefault();
        let modalParent = this.getAttribute('data-close');

        document.querySelector(modalParent).querySelector('.modal__dialog').style.transform = 'rotateX(90deg)';

        setTimeout(() => {
            document.querySelector(modalParent).classList.remove('show');
            body.classList.remove('no-scroll');
        }, 200);
    }
}

for (let modal of modals) {
    modal.onclick = function () {

        modal.querySelector('.modal__dialog').style.transform = 'rotateX(90deg)';

        setTimeout(() => {
            modal.classList.remove('show');
            body.classList.remove('no-scroll');
        }, 200);
    }
}

for (let modalDialog of modalDialogs) {
    modalDialog.onclick = function (evt) {
        evt.stopPropagation();
    }
}

// Mobile nav

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');


burger.onclick = function () {
    nav.classList.toggle('show');
}

document.onkeydown = function (evt) {
    if (evt.key === 'Escape') {
        nav.classList.remove('show');
    }
}










