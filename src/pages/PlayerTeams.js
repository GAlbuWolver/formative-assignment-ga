import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PlayerTeams() {
  const [teamName, setTeamName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://v1.basketball.api-sports.io/leagues', {
          headers: {
            'x-rapidapi-key': '11848bde7dac1824600a0e7dae4c93d1',
            'x-rapidapi-host': 'v1.basketball.api-sports.io'
          }
        });
        
        //console.log(response.data.response[0].name);
        setTeamName(response.data.response[0].name);       
      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='row'>
      <h1>{teamName ? `Team: ${teamName}` : 'Loading team name...'}</h1>
    </div>
  );
}

export default PlayerTeams;
