import React, { useState } from 'react'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [geolocation, setGeolocation] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/createuser', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, password: password, location: geolocation })
    });
    const json = await response.json();
    console.log(json);

    if(!json.success){
      alert("ENTER VALID CREDENTIALS");
    }
  }


  return (
    <div style={styling.main}>

      <form style={styling.form} onSubmit={handleSubmit}>

        <label>Enter name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} style={styling.inputs} />


        <label>Enter Email</label>
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} style={styling.inputs} />

        <label>Enter Geolocation</label>
        <input type='text' value={geolocation} onChange={(e) => setGeolocation(e.target.value)} style={styling.inputs} />

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
export default Signup
