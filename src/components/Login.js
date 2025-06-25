import axios from "axios"
import React, { useEffect, useContext ,useState} from 'react';
import UserContext from '../context/UserContext';
const API_URL = process.env.REACT_APP_API_URL;
function Login() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
const { setUser } = useContext(UserContext); 
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email, password
      })

      alert(response.data.message);
      localStorage.setItem("token",response.data.token);
      console.log(response.data.token);
      setUser(response.data.name);
      window.location.href="/dashboard";
    } catch (error) {
      if (error.response) {
        alert(error.response.message)
      }
      else{
        alert(error.message);
      }
    }
  }
  return (
    <>
      <div>

        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
          <div class="mb-3">
            <input type="text" name="email" placeholder='Email' onChange={((e)=>setEmail(e.target.value))}/>
          </div>
          <div class="mb-3">
            <input type="password" name="password" placeholder='Password' onChange={((e)=>setPassword(e.target.value))} />
            <label htmlFor=""><a href="/forgot">Forgot Password</a></label>

          </div>


          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login
