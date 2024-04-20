import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardsList from './components/CardsList';
import CardForm from './components/CardForm';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';



function App() {
  const [editingCardId, setEditingCardId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Функция для создания новой карточки
  function handleNewCard() {
    setEditingCardId(null); // Для новой карточки id будет null
    setShowForm(true);
  }

  // Функция для обработки успешной отправки формы (создание/редактирование карточки)
  function handleFormSuccess() {
    setShowForm(false);
    window.location.reload(); // Упрощенный вариант перезагрузки списка карточек
  }

  // Функция для редактирования карточки
  function handleEditCard(id) {
    setEditingCardId(id);
    setShowForm(true);
  }

  return (
    <div>
      <Router>
        <div className="app">
          <Sidebar /> {/* Отображение бокового меню */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* Путь к списку карточек */}
              <Route
                path="/cards"
                element={<CardsList onEdit={handleEditCard} />}
              />
            </Routes>
          </div>
        </div>
      </Router>

      <h1>Flashcards (CRUD Example)</h1>
      <button onClick={handleNewCard}>Create New</button>
      {/* Отображение формы создания или редактирования карточки */}
      {showForm && (
        <CardForm cardId={editingCardId} onSuccess={handleFormSuccess} />
      )}
    </div>
  );
}

export default App;
