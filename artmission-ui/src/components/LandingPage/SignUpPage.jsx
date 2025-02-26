import React, { useState } from "react";
import { registerUser } from "../../services/userServices";

const SignUpPage = () => {
    //SignUpForm Logic and backend calls
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(username, email, password, verifyPassword);
            setMessage("Registration successful!");
            window.location.href= "/";
        } catch (error) {
            setMessage(error.response?.data?.message); 
        }
    };
    //Return Form
    //TODO: Add user agreement (terms and conditions)
    return(
        <div>
            <h2>Welcome to ArtMission</h2>
            <h3>Create an account:</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:
                            <input type="text" name="username" value={username} id="username" onChange={(e) => setUsername(e.target.value)} required></input>
                        </label>
                    </div>
                    <div>
                        <label>Password:
                            <input type="password" name="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} required></input>
                        </label>
                    </div>
                    <div>
                        <label>Verify Password:
                            <input type="password" name="verify" value={verifyPassword} id="verify" onChange={(e) => setVerifyPassword(e.target.value)} required></input>
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
                {message && <p>{message}</p>}
        </div>
    )
}

export default SignUpPage;