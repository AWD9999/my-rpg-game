const startGameButton = document.getElementById("startGame");

// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;
tg.expand(); // Разворачиваем Mini App на весь экран

startGameButton.addEventListener("click", () => {
    // Отправляем данные боту
    tg.sendData("start_game"); // Отправляем команду начала игры
    alert("Игра начата!");
});
