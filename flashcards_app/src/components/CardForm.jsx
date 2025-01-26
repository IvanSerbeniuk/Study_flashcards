import React, { useState, useEffect } from 'react';
import { createCard, updateCard, fetchCard } from '../services/cardsService';

function CardForm({ cardId, onSuccess }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [category, setCategory] = useState('');

  // Если cardId передан, значит хотим "редактировать" существующую карточку:
  useEffect(() => {
    if (cardId) {
      loadCardData(cardId);
    }
  }, [cardId]);

  async function loadCardData(id) {
    try {
      const card = await fetchCard(id);
      setQuestion(card.question);
      setAnswer(card.answer);
      setCategory(card.category);
    } catch (err) {
      console.error('Error loading card:', err);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { question, answer, category };
    try {
      if (!cardId) {
        // Создание новой карточки
        await createCard(data);
      } else {
        // Редактирование существующей
        await updateCard(cardId, data);
      }
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error('Error:', err);
    }
  }

  return (
    <div>
      <h2>{cardId ? 'Edit Card' : 'Create New Card'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question:</label>
          <input
            type="text"
            value={question}
            onChange={e => setQuestion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Answer:</label>
          <textarea
            value={answer}
            onChange={e => setAnswer(e.target.value)}
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CardForm;
