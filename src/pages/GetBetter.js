import React from 'react';
import './GetBetter.css'; 

function GetBetter() {
  // Dummy data for the cards
  const cards = [
    { id: 1, videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID1', title: 'Title 1', description: 'Description 1' },
    { id: 2, videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID2', title: 'Title 2', description: 'Description 2' },
    { id: 3, videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID3', title: 'Title 3', description: 'Description 3' },
    { id: 4, videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID4', title: 'Title 4', description: 'Description 4' },
    { id: 5, videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID5', title: 'Title 5', description: 'Description 5' },
  ];

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <iframe src={card.videoUrl} title={card.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default GetBetter;
