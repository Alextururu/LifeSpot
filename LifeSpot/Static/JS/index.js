﻿/*
* Сессия теперь создается в общей области видимости.
* Будет "захватываться" тремя функциями
* 
* */
let session = new Map();
/*
* Сохранение данных сессии сразу при заходе пользователя на страницу
* 
* */
function handleSession() {
    // Сохраним время начала сессии
    session.set("startDate", new Date().toLocaleString())
    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent)
}
/*
* Проверка возраста пользователя
* 
* */
function checkAge() {
    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

    if (session.get("age") >= 18) {
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
    }
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}
/*
* Вывод данных сессии в консоль
* 
* */
let sessionLog = function logSession() {
    for (let result of session) {
        console.log(result)
    }
}







//// Логирование сессии (объявлено через function declaration)
//let sessionLog = function logSession(session) {
//    // Вывод в консоль
//    for (let result of session) {
//        console.log(result)
//    }
//}

//// Обработка сессии (объявлено через expression)
//function handleSession() {
//    // создадим объект Map для хранения сессии
//    let session = new Map();
//    // Сохраним UserAgent
//    session.set("userAgent", window.navigator.userAgent)

//    // Запросим возраст пользователя и тоже сохраним
//    session.set("age", prompt("Пожалуйста, введите ваш возраст?"))

//    // Проверка на возраст и сохранение сессии
//    if (session.get("age") >= 18) {
//        let startDate = new Date().toLocaleString();

//        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
//        session.set("startDate", startDate)
//    }
//    else {
//        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
//        window.location.href = "http://www.google.com"
//    }

//    // Теперь мы возвращаем объект сессии
//    return session;
//}


/*
* Функция для фильтрации контента
* Будет вызываться благодаря атрибуту oninput на index.html
*
* */
function filterContent() {
    let elements = document.getElementsByClassName('video-container');

    for (let i = 0; i <= elements.length; i++) {
        let videoText = elements[i].querySelector(".video-title").innerText;
        if (!videoText.toLowerCase().includes(inputParseFunction() /* Захват переменной теперь происходит с помощью замыкания */.toLowerCase())) {
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* Всплывающее окно будет показано по таймауту
* 
* */
setTimeout(() =>
    alert("Нравится LifeSpot? " + '\n' + "Подпишитесь на наш Instagram @lifespot999!"),
    30000);

