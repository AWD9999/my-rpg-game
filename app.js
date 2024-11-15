// Функция для отправки выбранного класса боту
function chooseClass(className) {
    // Отправка данных через Telegram Web Apps API
    window.Telegram.WebApp.sendData(className);
    alert(`Вы выбрали класс: ${className}`);
}

// Другие возможные функции для обработки интерфейса Mini App можно добавить здесь
