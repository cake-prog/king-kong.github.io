//получаем элементы
const button = document.getElementById('searching');
const query = document.getElementById('query');

let isActive = false; //начальное состояние кнопки 

button.addEventListener('click', () => {
    isActive = !isActive; // Переключаем состояние

    // Показываем или скрываем элемент в зависимости от состояния
    if (isActive) {
        query.style.visibility = 'visible'; // Делаем элемент видимым
        setTimeout(() => {
            query.style.opacity = '1'; // Применяем плавное появление
        }, 0); // Задержка 0 для выполнения в следующем цикле
    } else {
        query.style.opacity = '0'; // Плавное исчезновение
        setTimeout(() => {
            query.style.visibility = 'hidden'; // Скрываем элемент после исчезновения
        }, 500); // Задержка равна времени анимации
    }
});


const click_burger = document.getElementById('click_burger');
const burger_menu = document.getElementById('burger_menu');

let isActive_burger = false; // Начальное состояние кнопки 

click_burger.addEventListener('click', (event) => {
    event.stopPropagation(); // Остановим всплытие событий, чтобы избежать конфликтов
    isActive_burger = !isActive_burger; // Переключаем состояние

    if (isActive_burger) {
        burger_menu.style.display = 'flex'; // Делаем элемент видимым
    } else {
        burger_menu.style.display = 'none'; // Прячем элемент
    }
});

// Закрытие меню при клике вне его
document.addEventListener('click', () => {
    if (isActive_burger) {
        burger_menu.style.display = 'none';
        isActive_burger = false; // Сбрасываем состояние
    }
});

// Чтобы меню не закрывалось при клике внутри него
burger_menu.addEventListener('click', (event) => {
    event.stopPropagation(); // Останавливаем всплытие события
});
