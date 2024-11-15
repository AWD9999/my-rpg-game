function chooseAction(action) {
    // Обновляем текст наставника в зависимости от выбранного действия
    const mentorSpeech = {
        baryga: "Барыга? Тот ещё хитрый гад. Но для начала тебе подойдёт.",
        walk: "Прогуляйся, оглядись по сторонам. Только не нарывайся.",
        fight: "С пацанами? Ну ты смелый, братан! Хотя и лох. Тебя ведь вынесут!",
        default: "Э, пацан, ты кто такой? Ладно, помогу чутка. Жми, не тупи."
    };

    document.getElementById("mentor-speech").textContent = mentorSpeech[action] || mentorSpeech.default;

    // Отправляем выбранное действие боту через Telegram Web App API
    window.Telegram.WebApp.sendData(action);
}
