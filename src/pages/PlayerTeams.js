import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function PlayerTeams() {
  const [games, setGames] = useState([]);
  const [dbGames, setDbGames] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [deleteId, setDeleteId] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [newHomeScore, setNewHomeScore] = useState('');
  const [newAwayScore, setNewAwayScore] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedDate = selectedDate.toISOString().split('T')[0];
        const response = await axios.get(`https://v2.nba.api-sports.io/games?date=${formattedDate}`, {
          headers: {
            'x-rapidapi-key': '11848bde7dac1824600a0e7dae4c93d1',
            'x-rapidapi-host': 'v2.nba.api-sports.io',
          },
        });
        setGames(response.data.response);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchData();
    fetchDbGames();
  }, [selectedDate]);

  const sendDataToDB = () => {
    games.forEach((game) => {
      const gameData = {
        id: game.id,
        homename: game.teams.home.name,
        homescore: game.scores.home.points,
        awayname: game.teams.visitors.name,
        awayscore: game.scores.visitors.points,
      };

      axios.post('http://localhost/bballdb/add_team.php', gameData)
        .then(response => {
          console.log('Data sent successfully for game', response.data);
          fetchDbGames();
        })
        .catch(error => {
          console.error('There was an error sending the data for game', game, error);
        });
    });
  };

  const handleDelete = () => {
    axios.delete(`http://localhost/bballdb/delete_team.php?id=${deleteId}`)
      .then(() => {
        console.log(`Game with ID ${deleteId} deleted successfully.`);
        setDeleteId('');
        fetchDbGames();
      })
      .catch(error => {
        console.error('There was an error deleting the game:', error);
      });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost/bballdb/update_team.php?id=${updateId}`, {
      homescore: newHomeScore,
      awayscore: newAwayScore,
    })
    .then(() => {
      console.log(`Game with ID ${updateId} updated successfully.`);
      setUpdateId('');
      setNewHomeScore('');
      setNewAwayScore('');
      fetchDbGames();
    })
    .catch(error => {
      console.error('There was an error updating the game:', error);
    });
  };

  const fetchDbGames = async () => {
    try {
      const response = await axios.get('http://localhost/bballdb/get_teams.php');
      setDbGames(response.data);
    } catch (error) {
      console.error('There was an error fetching the games from the database:', error);
    }
  };

  return (
    <div>
      <div className='row'>
        <h1>Please select a date to view the games:</h1>
        <div style={{ margin: '20px 0' }}>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            className="date-input"
          />
        </div>
      </div>
      <h2>"Live" Scores</h2>

      <table className='table-modern'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {games.map((game, index) => (
            <tr key={index}>
              <td>{game.id}</td>
              <td>{game.date.start}</td>
              <td>{game.teams.home.name}</td>
              <td>{game.teams.visitors.name}</td>
              <td>{`${game.scores.home.points} - ${game.scores.visitors.points}`}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='row'>
        <div className="delete-section">
          <h1>Lets Add/Delete Some Games</h1>
          <input
            type="text"
            className='input-modern'
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            placeholder="Enter game ID to delete"
          />
          <div className='row'>
            <button className='button-modern' onClick={handleDelete}>Delete Game</button>
            <button className='button-modern' onClick={sendDataToDB}>Send Live Games to DB</button>
          </div>
        </div>
      </div>
      <div className='row'>
        <h1>Don't like a game's outcome? Feel free to change its score. I just need that game's ID please!</h1>
        <input
          className='input-modern'
          type="text"
          value={updateId}
          onChange={(e) => setUpdateId(e.target.value)}
          placeholder="Enter game ID to update"
        />
        <input
          className='input-modern'
          type="number"
          value={newHomeScore}
          onChange={(e) => setNewHomeScore(e.target.value)}
          placeholder="New Home Score"
        />
        <input
          className='input-modern'
          type="number"
          value={newAwayScore}
          onChange={(e) => setNewAwayScore(e.target.value)}
          placeholder="New Away Score"
        />
        <button className='button-modern' onClick={handleUpdate}>Update Game</button>
      </div>

      <h2>Games Preview from Database</h2>
      <table className='table-modern'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Home Team</th>
            <th>Home Score</th>
            <th>Away Team</th>
            <th>Away Score</th>
          </tr>
        </thead>
        <tbody>
          {dbGames.map((game, index) => (
            <tr key={index}>
              <td>{game.id}</td>
              <td>{game.homename}</td>
              <td>{game.homescore}</td>
              <td>{game.awayname}</td>
              <td>{game.awayscore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PlayerTeams;
