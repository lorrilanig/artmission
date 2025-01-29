import React, { useState, useEffect} from 'react';
import { userLogin } from '../../services/userServices';
import { Link } from 'react-router-dom';

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
        <div>
            
        </div>
    )

};

export default Login;