import React, {useState} from 'react';
import {useNavigate, Link} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";

const Login = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)

        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")

        } catch (e) {
            setErr(true)
        }
    };


    return (
        <div className='formContainer'>
            <div className='formWrapper'>
                <span className="logo">Lama Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input name={"email"} type={"email"} placeholder={"email"} />
                    <input name={"password"} type={"password"} placeholder={"password"} />
                    <button className="btn">Sign in</button>
                    {err && <span className="err">Something went wrong</span>}
                </form>
                <p>You don't have an account ?
                    <Link to="/register"> Register</Link>
                </p>
            </div>
        </div>
    );
};
export default Login;

