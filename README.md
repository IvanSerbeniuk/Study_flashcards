# Study Flashcards Project (CI4 + React)

Данный проект представляет собой систему карточек для изучения различных тем. Серверная часть написана на **CodeIgniter 4** (PHP) и предоставляет **REST API** для управления карточками, а фронтенд на **React** осуществляет отображение и взаимодействие с пользователем.

---

## Содержание
1. [Технологии](#технологии)
2. [Структура репозитория](#структура-репозитория)
3. [Требования к окружению](#требования-к-окружению)
4. [Установка и запуск бэкенда (CI4)](#установка-и-запуск-бэкенда-ci4)
5. [Подготовка базы данных](#подготовка-базы-данных)
6. [Запуск и тестирование бэкенда](#запуск-и-тестирование-бэкенда)
7. [Установка и запуск фронтенда (React)](#установка-и-запуск-фронтенда-react)
8. [Настройка CORS](#настройка-cors)
9. [Структура API (эндпоинты)](#структура-api-эндпоинты)
10. [Дополнительно](#дополнительно)
11. [Лицензия](#лицензия)

---

## Технологии

- **PHP 8+** (бэкенд, CodeIgniter 4)
- **MySQL/MariaDB** (хранилище данных)
- **Node.js** и **npm / yarn** (фронтенд, React)
- **Composer** (управление зависимостями PHP)

---

## Структура репозитория

Примерная структура (может отличаться в зависимости от реального размещения и названий папок):

.....Заполнить...


---

## Требования к окружению

1. **PHP 8+** (или хотя бы 7.4+, если позволяет CI4)  
2. **Composer** (для установки зависимостей CodeIgniter)  
3. **MySQL** или **MariaDB** (для хранения карточек)  
4. **Node.js** (LTS-версия, например 16+), **npm** или **yarn** (для фронтенда)

Убедитесь, что все инструменты доступны в PATH:
```bash
php -v
composer -V
mysql --version
node -v
npm -v
```


## Установка и запуск бэкенда (CI4)
1. **Склонируйте репозиторий** (либо скопируйте папку appstarter в удобное место).

2. **Установите зависимости** в папке с CI4:

```bash
cd appstarter
composer install
```
3. **Настройте подключение к БД.**

- Откройте app/Config/Database.php (или используйте .env).
- Укажите корректные hostname, database, username, password. Например:
```php
public array $default = [
  'hostname' => 'localhost',
  'database' => 'study_flashcards',
  'username' => 'root',
  'password' => '',
  'DBDriver' => 'MySQLi',
  // ...
];
```
- Убедитесь, что PHP-расширение mysqli включено (в php.ini).
4. В .env (если присутствует в проекте), раскомментируйте строки CI_ENVIRONMENT = development, при необходимости задайте параметры БД.

---

## Запуск и тестирование бэкенда
1. Запустите встроенный сервер CodeIgniter 4:

```bash
php spark serve
```
По умолчанию сервер доступен на http://localhost:8080.

2. Проверьте стартовую страницу CI4, перейдя в браузере на http://localhost:8080.

3. Тест API:

- GET http://localhost:8080/api/cards — список всех карточек (JSON).
- GET http://localhost:8080/api/cards/1 — карточка с id=1.
- POST http://localhost:8080/api/cards — создать новую карточку (данные в теле как JSON).
- PUT http://localhost:8080/api/cards/1 — обновить карточку с id=1.
- DELETE http://localhost:8080/api/cards/1 — удалить карточку с id=1.

---

## Установка и запуск фронтенда (React)
1. Перейдите в папку с React-приложением (flashcards_app).

2. Установите зависимости:

```bash
npm install
```

3. Запустите локальный dev-сервер:

```bash
npm start
```