import React, { useState, useEffect} from 'react';
import { userLogin } from '../../services/userServices';
import { Link } from 'react-router-dom';
import SignUpPage from './SignUpPage';

//Login container
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);
    
    //retrieve user from localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            // window.location.href = "/dashboard"
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await userLogin(email, password);
            //redirect after login completion
            localStorage.setItem('user', JSON.stringify(response));
            // window.location.href = "/dashboard"
        } catch (error) {
            setMessage("Incorrect Email or Password. Please Try Again.")
        }
    };

    return(
        <div className="container">
            <div>
                <h2>Login</h2>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="input">
                        <input type="email" name="email" value={email} placeholder="Email Address" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <br></br>
                    <div className="input">
                        <input type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                </div>
                <div className="submit-container">
                    <button type="submit" className="submit">Login</button>
                </div>
            </form>
            {message && <p>{message}</p>}
            <div className="footer">
                Not a member?
                <Link to='/signup'>Sign up here!</Link>
            </div>
        </div>
    )

};

export default Login;