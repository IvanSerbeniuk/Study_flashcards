// src/services/cardsService.js
export const API_URL = 'http://localhost:8080/api'; // Бэкенд CI4

// Получить все карточки
export async function fetchCards() {
  const response = await fetch(`${API_URL}/cards`);
  return response.json(); // массив карточек
}

// Получить одну карточку
export async function fetchCard(id) {
  const response = await fetch(`${API_URL}/cards/${id}`);
  return response.json(); // объект карточки
}

// Создать новую карточку
export async function createCard(data) {
  const response = await fetch(`${API_URL}/cards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Обновить существующую карточку
export async function updateCard(id, data) {
  const response = await fetch(`${API_URL}/cards/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
}

// Удалить карточку
export async function deleteCard(id) {
  const response = await fetch(`${API_URL}/cards/${id}`, {
    method: 'DELETE',
  });
  return response.json();
}
