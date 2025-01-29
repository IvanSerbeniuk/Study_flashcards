import React, { useState } from 'react';
import CardsList from './components/CardsList';
import CardForm from './components/CardForm';

function App() {
  const [editingCardId, setEditingCardId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  function handleNewCard() {
    setEditingCardId(null);
    setShowForm(true);
    // стал у меня setShowForm = true а дальше куда это передается? почему появляется форма 2
  }

  function handleFormSuccess() {
    // Просто перезагружаем окно или
    // используем колбек для обновления списка (обновить список карточек)
    setShowForm(false);
    window.location.reload(); // упрощенный вариант
  }

  function handleEditCard(id) {
    setEditingCardId(id);
    setShowForm(true);
  }

  return (
    <div>
      <h1>Flashcards (CRUD Example)</h1>
      <button onClick={handleNewCard}>Create New</button>
      <CardsList onEdit={handleEditCard} />
      {showForm && (
        <CardForm cardId={editingCardId} onSuccess={handleFormSuccess} />
      )}
    </div>
  );
}

export default App;
