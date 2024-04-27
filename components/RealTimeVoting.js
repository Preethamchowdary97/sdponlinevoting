import React, { useState } from 'react'; 

const RealTimeVoting = () => { 
  const [votes, setVotes] = useState({ 
    tdp: 0, 
    ysrcp: 0, 
    congress: 0, 
    nota: 0 
  }); 

  
  const handleVote = (option) => {
    const updatedVotes = { ...votes };
    updatedVotes[option] += 1;
    setVotes(updatedVotes);

    // Redirect to Thanks.js after voting
    window.location.href = '/thanks';
  };

  return ( 
    <div 
      style={{ 
        fontFamily: 'Arial, sans-serif', 
        maxWidth: '600px', 
        margin: '0 auto', 
        padding: '20px', 
        border: '1px solid #ccc', 
        borderRadius: '10px', 
        backgroundColor: '#f9f9f9' 
      }} 
    > 
      <h2>Real-Time Voting</h2> 
      <div style={{ marginBottom: '20px' }}> 
        <img
          src="./image/tdp.jpeg"
          alt="TDP Symbol"
          style={{ width: '50px', height: '50px', marginRight: '10px' }}
        />
        <p>TDP: {votes.tdp}</p>
        <button onClick={() => handleVote('tdp')}> 
          Vote for TDP 
        </button> 
      </div> 
      <div style={{ marginBottom: '20px' }}> 
        <img
          src="./image/ysr.jpeg"
          alt="YSRCP Symbol"
          style={{ width: '50px', height: '50px', marginRight: '10px' }}
        />
        <p>YSRCP: {votes.ysrcp}</p> 
        <button onClick={() => handleVote('ysrcp')}> 
          Vote for YSRCP 
        </button> 
      </div> 
      <div style={{ marginBottom: '20px' }}>
        <img
          src="./image/congress.png"
          alt="CONGRESS Symbol"
          style={{ width: '50px', height: '50px', marginRight: '10px' }}
        /> 
        <p>CONGRESS: {votes.congress}</p> 
        <button onClick={() => handleVote('congress')}> 
          Vote for CONGRESS 
        </button> 
      </div> 
      <div style={{ marginBottom: '20px' }}>
        <img
          src="./image/nota.jpg"
          alt="NOTA Symbol"
          style={{ width: '50px', height: '50px', marginRight: '10px' }}
        /> 
        <p>NOTA: {votes.nota}</p> 
        <button onClick={() => handleVote('nota')}> 
          Vote for NOTA 
        </button> 
      </div> 
    </div> 
  ); 
}; 

export default RealTimeVoting;
