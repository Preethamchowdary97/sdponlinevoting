import React from 'react'
import { useLocation } from 'react-router-dom'
const Homepage = () => {
    const location = useLocation();
    const username = location.state?.username || 'Guest';

  return (
    <div>
      <center>
        <h1>welcome,{username}!</h1>
        
      </center>
    </div>
  )
}

export default Homepage
