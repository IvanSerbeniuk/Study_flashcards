import React, { useEffect, useState } from 'react';
import { fetchCards, deleteCard } from '../services/cardsService';

function CardsList({ onEdit }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    try {
      const data = await fetchCards();
      setCards(data);
    } catch (err) {
      console.error('Error:', err);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm('Are you sure you want to delete this card?')) return;
    try {
      await deleteCard(id);
      setCards(prev => prev.filter(card => card.id !== id));
    } catch (err) {
      console.error('Error deleting:', err);
    }
  }

  return (
    <div>
      <h2>All Cards</h2>
      {cards.length === 0 ? (
        <p>No cards found.</p>
      ) : (
        <ul>
          {cards.map(card => (
            <li key={card.id}>
              <strong>{card.question}</strong> — {card.answer} ({card.category})
              {' '}
              <button onClick={() => handleDelete(card.id)}>Delete</button>
              <button onClick={() => onEdit(card.id)}>Edit</button> {/* Кнопка редактирования */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CardsList;
