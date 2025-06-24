import React ,{useContext}from 'react'
import UserContext from '../context/UserContext';


function Dashboard() {
     const { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  )
}

export default Dashboard
