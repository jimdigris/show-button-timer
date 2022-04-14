
// "Появление кнопки спустя некоторео время бездействия"

'use strict';

(function () {
    const helpButton = document.querySelector('.help-button');                  // кнопка
    let timInactivity = 2;                                                      // время простоя (секунд)
    let counter = 0;
    let className = 'show-button';                                              // добавляемый класс
    let timerStart, timerChecking;                                              // таймеры для счетчиков

    // ! ----

    if (helpButton) {
        document.addEventListener('mousemove', resetCounter);
        document.addEventListener('keypress', resetCounter);
    }

    // ! ----

    function resetCounter() { counter = 0; }                                                                                        // сбросить счетчик
    function startCounter() { timerStart = setInterval(() => { counter++; }, 1000); }                                               // запускаем счетчик
    function checkingCounter() { timerChecking = setInterval(() => { if (counter > timInactivity) { showButton(); } }, 1000); }     // проверка счетчика

    // показать кнопку
    function showButton() {
        helpButton.classList.add(className);
        clearTimeout(timerStart);
        clearTimeout(timerChecking);
        document.removeEventListener('mousemove', resetCounter);
        document.removeEventListener('keypress', resetCounter);
    }

    // ! ----

    startCounter();                 // запустим увеличение счетчика
    checkingCounter();              // запустим проврку значения счетчика
})();