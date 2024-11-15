function chooseAction(action) {
    // Текст наставника в зависимости от действия
    const mentorSpeech = {
        baryga: "Барыга? Тот ещё хитрый гад. Но для начала тебе подойдёт.",
        walk: "Прогуляйся, оглядись по сторонам. Только не нарывайся.",
        fight: "С пацанами? Ну ты смелый, братан! Хотя и лох. Тебя ведь вынесут!",
        default: "Э, пацан, ты кто такой? Ладно, помогу чутка. Жми, не тупи."
    };

    // Обновляем текст наставника
    document.getElementById("mentor-speech").textContent = mentorSpeech[action] || mentorSpeech.default;

    // Сохраняем действие игрока (например, в локальную переменную)
    savePlayerChoice(action);

    // Имитация задержки перед новым выбором
    setTimeout(() => {
        document.getElementById("mentor-speech").textContent = "Выбери следующее действие, братан.";
    }, 3000);
}

// Функция для сохранения выбранного действия (можно использовать локальное хранилище)
function savePlayerChoice(action) {
    // Пример сохранения в локальную переменную (можно доработать для накопления данных)
    console.log("Сохранено действие:", action);
    // Можно использовать `localStorage` для временного хранения действий
    localStorage.setItem('lastAction', action);
}

// Вызов при закрытии Mini App для отправки накопленных данных
function sendDataToBot() {
    const lastAction = localStorage.getItem('lastAction');
    if (lastAction) {
        // Можно отправить данные через Telegram Web App API только при завершении
        window.Telegram.WebApp.sendData(lastAction);
    }
}

// Пример: вызов отправки данных при закрытии приложения
window.Telegram.WebApp.onEvent('mainButtonClicked', sendDataToBot);
