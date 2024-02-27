import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userEmail, setUserEmail] = useState('')
const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/loginuser', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    });
    const json = await response.json();
    console.log(json);

    if(!json.success){
      alert("ENTER VALID CREDENTIALS");
    }
    if(json.success){
      localStorage.setItem("AuthToken",json.AuthToken);
      navigate('/')
    }
  }

  return (
    <div style={styling.main}>

      <form style={styling.form} onSubmit={handleSubmit}>
        <label>Enter Email</label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} style={styling.inputs} />
        <label>Enter passowrd</label>
        <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} style={styling.inputs} />
        <button style={styling.button}>Submit</button>
      </form>
    </div>
  )
}

const styling = {
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    width: "30rem",
    height: "fit-content"
  },
  inputs: {
    width: "80%",
    padding: ".6rem 2rem",
    border: "none",
    backgroundColor: "whitesmoke",
    outline: "none"
  },
  button: {
    border: "none",
    backgroundColor: "yellow",
    color: "black",
    fontWeight: "bold",
    padding: "1rem 2rem",
    width: "80%",
    cursor: "pointer"
  }
}
export default Login
