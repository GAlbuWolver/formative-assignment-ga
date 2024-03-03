import React from 'react';
import './GetBetter.css'; 

function GetBetter() {
  const cards = [
    { id: 1, videoUrl: 'https://www.youtube.com/embed/oADaM2L1YLc', title: 'This 5 Minute DRIBBLING WORKOUT Changes Your Game FOREVER 🤯', description: 'Join Coach Marcus Hodges from ILB Elite as he shows you a MUST DO daily ball handling workout that will take your dribbling to the NEXT LEVEL fast! ⏫' },
    { id: 2, videoUrl: 'https://www.youtube.com/embed/XIHqHouUHoY', title: 'How To Shoot A Basketball For Beginners! Basketball Basics [SECRETS]', description: 'The tips and drills in this video will help you learn how to start shooting a basketball the right way for beginners with perfect shooting form.' },
    { id: 3, videoUrl: 'https://www.youtube.com/embed/XbtmGKif7Ck', title: 'The Basic Rules of Basketball | Basketball', description: 'This is the very first video in our series of Basketball videos, designed to teach you everything you need to know to get started! Keep watching for more fantastic free videos.' },
    { id: 4, videoUrl: 'https://www.youtube.com/embed/Hzc2QF9EUOc', title: 'How to: Top 5 Basketball Moves to Get Past Defenders in 2020!', description: 'How to: Top 5 Basketball Moves to Get Past Defenders in 2020! Use these deadly basketball moves to get past defenders so that you can score more points in games.' },
    { id: 5, videoUrl: 'https://www.youtube.com/embed/moPEMNHmwc4', title: 'How To GET BETTER HANDLES In Just 5 Minutes a Day (DO THIS DAILY!!)', description: 'How To GET BETTER HANDLES In Just 5 Minutes a Day!! Coach Rock will show you a simple but effective ball-handling circuit that you can do every day to become a better ball-handler. If you are tired of not feeling confident when the ball is in your hand, this video will help you start to improve your handles and develop the confidence needed!' },
    { id: 6, videoUrl: 'https://www.youtube.com/embed/teqk-UDPCrc?list=PLjUDMx8lnUB6MWF64jjGIkwKLjrVjnH6E', title: '10 Minute At-Home Dribbling Workout (Follow Along)    ', description: '10 Minute At-Home Dribbling Workout (Follow Along)' },
    { id: 6, videoUrl: 'https://www.youtube.com/embed/d0z7QqblJaM', title: 'How To Shoot A Layup For Beginners! Basketball Basics [SECRETS]"', description: 'Making layups can be hard when getting started in basketball. There is the footwork, the dribbling, the gather, the timing of all that, and of course making the shot.' },
    { id: 6, videoUrl: 'https://www.youtube.com/embed/PBRJLqS1HVU', title: 'WARNING: Avoid These Three KILLER Shooting Mistakes | Basketball Shooting Tips', description: 'These simple shooting mistakes can really hinder a players ability to really score the basketball. By making sure you are avoiding these killer shooting mistakes you are automatically going to give yourself a better opportunity to increase your overall shooting percentage. By implementing these tips into your game you can almost immediately skyrocket your shooting!' },

  ];

  return (
    <div className="cards-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <iframe src={card.videoUrl} title={card.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <h3 >{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
}

export default GetBetter;
