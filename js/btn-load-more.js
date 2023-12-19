const btn = document.querySelector('#btn');
const portfolioCol = Array.from(document.querySelectorAll('.portfolio__col'));

// Динамическое отслеживание внутренней ширины окна браузера
window.addEventListener('resize', evt => {
    if (evt.target.window.innerWidth > 766) responce1();
    if (evt.target.window.innerWidth <= 766 && evt.target.window.innerWidth > 584) responce2();
    if (evt.target.window.innerWidth <= 584) responce3();
})

// Показываем все наши работы и скрываем кнопку
function openCatalog() {
    btn.addEventListener('click', () => {
        portfolioCol.forEach(item => item.classList.remove('hide'));
        btn.classList.add('hide');
    })
}

// Количество показываемых работ исходя из внутренней ширины окна браузера
function responce1() {
    if (window.innerWidth > 766) {
        btn.classList.add('hide');

        portfolioCol.forEach((item, index) => {
            item.classList.add('hide')
            if (index <= 8) {
                item.classList.remove('hide')
            } else if (index > 8) {
                btn.classList.remove('hide');
            }
            openCatalog();
        })
    }
}
responce1();


function responce2() {
    if (window.innerWidth <= 766 && window.innerWidth > 584) {
        btn.classList.add('hide');

        portfolioCol.forEach((item, index) => {
            item.classList.add('hide')
            if (index <= 5) {
                item.classList.remove('hide')
            } else if (index > 5) {
                btn.classList.remove('hide');
            }
            openCatalog();
        })
    }
}
responce2();


function responce3() {
    if (window.innerWidth <= 584) {
        btn.classList.add('hide');

        portfolioCol.forEach((item, index) => {
            item.classList.add('hide')
            if (index <= 2) {
                item.classList.remove('hide')
            } else if (index > 2) {
                btn.classList.remove('hide');
            }
            openCatalog();
        })
    }
}
responce3();