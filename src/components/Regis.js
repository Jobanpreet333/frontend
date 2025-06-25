import React, { useState } from 'react'
import axios from "axios"
import {link} from "react-router"
const API_URL = process.env.REACT_APP_API_URL;
function Regis() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleFormSubmit = async (e) => {
        e.preventDefault();
       try {
        const response = await axios.post(`${API_URL}/`, {
           name,email,password
        });

        alert(response.data.message);
       } catch (error) {
        if(error.message){
            alert(error.response.data.message)
        }else{
             alert("Something went wrong: " + error.message);
        }
        
       }
        

    }

    return (
        <div>
        <h1>Registration</h1>
            <form onSubmit={handleFormSubmit}>
                <div class="mb-3">
                    <input type="text" name="name" onChange={((e)=>setName(e.target.value))}  placeholder='Name' />
                </div>
                <div class="mb-3">
                    <input type="email" name="email"  onChange={((e)=>setEmail(e.target.value))}  placeholder='Email' />
                </div>
                <div class="mb-3">
                    <input type="password" name="password" onChange={((e)=>setPassword(e.target.value))} class="form-control"  placeholder='Password' />
                </div>
<div><h4><a link="/login"></a></h4></div>
                <button type="submit" class="btn btn-primary">Submit</button>
                
                
            </form>
        </div>
    )
}

export default Regis
