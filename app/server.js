const express = require('express');
const path = require('path');
const routes = require('./src/routes/index');
require('dotenv').config();

const app = express();

// Middleware для JSON
app.use(express.json());

// Статические файлы
app.use(express.static(path.join(__dirname, 'public')));

// Подключаем роуты
app.use('/', routes);
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Сервер запущен на http://localhost:${PORT}`);
});
