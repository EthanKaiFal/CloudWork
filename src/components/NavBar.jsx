import React, { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

export function NavBar() {
  const accessToken = localStorage.getItem('accessToken');
  const user = localStorage.getItem('username');
  const [name, setName] = useState( null); // Initialize userData as null
    console.log(accessToken)
          useEffect(() => {
           if(accessToken){
              console.log(user)
              setName(user)

           }

          })
  return (
    <div>
    <nav>
      <ul className="flex flex-row justify-between">
      <li className='border border-white p-2'><Link to="/">Trivia Thing</Link></li>
      <li className='border border-white p-2'><Link to="/Leaderboard">Leaderboard</Link></li>
      {name ? <li className="border border-white p-2"><Link to="/profile">{name}</Link></li> : <li className="border border-white p-2"><Link to="/login">Login</Link></li>}

      </ul>
    </nav>
    </div>
  );
}