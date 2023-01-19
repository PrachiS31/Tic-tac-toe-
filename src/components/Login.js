import React, { useState } from "react"; 

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {};
    return(
    <div className="Login">
    <label> Login </label>
    
     <input
       placeholder="Username" 
       onChange={(Event) =>{
        setUsername(Event.target.value);
    }} 
    />
     <input
       placeholder="Password" 
       onChange={(Event) =>{
        setPassword(Event.target.value);
    }} 
    />
    <button onClick={Login}>Login</button>
</div>
    );
}

export default Login;