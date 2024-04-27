

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ElectionList = () => {
  const [elections, setElections] = useState([]);

  useEffect(() => {
    axios.get('/api/elections')
      .then(res => {
        setElections(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif',
      backgroundImage: 'url("https://media.geeksforgeeks.org/wp-content/uploads/20230721174409/Election-System-in-India.webp")', /* Replace with your background image URL */
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '20px',
      color: '#fff'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2>Elections</h2>
        <p>An election is a formal group decision-making process by which a population chooses an individual or multiple individuals to hold public office.</p>
        <p>Elections have been the usual mechanism by which modern representative democracy has operated since the 17th century. Elections may fill offices in the legislature, sometimes in the executive and judiciary, and for regional and local government. This process is also used in many other private and business organizations, from clubs to voluntary associations and corporations.</p>
        <p>The global use of elections as a tool for selecting representatives in modern representative democracies is in contrast with the practice in the democratic archetype, ancient Athens, where the elections were considered an oligarchic institution and most political offices were filled using sortition, also known as allotment, by which officeholders were chosen by lot.</p>
        <p>Electoral reform describes the process of introducing fair electoral systems where they are not in place, or improving the fairness or effectiveness of existing systems. Psephology is the study of results and other statistics relating to elections (especially with a view to predicting future results). Election is the fact of electing, or being elected.</p>
        
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {elections.map(election => (
            <li key={election._id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
              <h3>{election.title}</h3>
              <p>{election.description}</p>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {election.candidates.map(candidate => (
                  <li key={candidate._id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={candidate.image} alt={candidate.name} style={{ width: '100px', height: '100px', marginRight: '10px', borderRadius: '50%' }} />
                    <span>{candidate.name}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
        <p>&copy; 2024 Election App. All rights reserved.</p>
        <p>Contact: contact@electionapp.com</p>
      </footer>
    </div>
  );
};

export default ElectionList;

