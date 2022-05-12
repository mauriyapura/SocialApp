import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router-dom";

export const Register = () => {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate();

    const handleClick = async(e) => {
        e.preventDefault();       
        if(passwordAgain.current.value != password.current.value){
            password.current.setCustomValidity("Password don't match!");
        }else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try {
                await axios.post("/auth/register", user);
                navigate(`/login`);
                
            } catch (err) {
                console.log(err)
            }
        }
        
    }

    return (

        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social App</h3>
                    <span className="loginDesc">Connect to friends around the world!</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input className="loginInput" placeholder="Username" ref={username} required />
                        <input className="loginInput" placeholder="Email" ref={email} required type="email" />
                        <input className="loginInput" placeholder="Password" type="password" ref={password} required />
                        <input className="loginInput" placeholder="Password again" type="password" ref={passwordAgain} required />
                        <button className="loginButton" type="submit">Sign Up</button>                    
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div>
    
  )
}
