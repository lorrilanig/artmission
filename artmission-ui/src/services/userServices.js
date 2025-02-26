import axios from 'axios';

const BASEAPIURL = "http://localhost:8082"

// User signup call to backend
export const registerUser = async (
    username,
    email,
    password,
    verifyPassword
) => {
    try {
        const response = await axios.post(`${BASEAPIURL}/api/user/newUser`, 
            { username, email, password, verifyPassword },
            { withCredentials: true }
        );
        return response.data;
    } catch (error) {
        console.log("There was an error creating this user", error);
        throw error;
    }
};

// User login call to backend
export const userLogin = async () => {

};

// user logout call to backend 
export const userLogout = async () => {

};