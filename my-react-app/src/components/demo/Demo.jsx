// CardComponent.jsx
import React from 'react';
import '../demo/demo.css';

function CardComponent() {
  const cardsData = [
    { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet.'  },
    { id: 2, title: 'Card 2', content: 'Consectetur adipiscing elit.' },
    { id: 3, title: 'Card 3', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 4, title: 'Card 4', content: 'Ut enim ad minim veniam.' },
    { id: 5, title: 'Card 5', content: 'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { id: 6, title: 'Card 6', content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  ];

  return (
    <div className="card-container">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <h2>{card.title}</h2>
          <p>{card.content}</p>
          <button className='btn'>Watch demo</button>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
