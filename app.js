function chooseAction(action) {
    // Отправляем выбранное действие в Telegram Web App
    window.Telegram.WebApp.sendData(action);
}
