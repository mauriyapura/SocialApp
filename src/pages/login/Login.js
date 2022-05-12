import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import {CircularProgress} from "@mui/material";

export const Login = () => {

    const email = useRef();
    const password = useRef();

    const {user, isFetching, error, dispatch} = useContext(AuthContext);

    const handleClick = (e) => {
        e.preventDefault();
        
        loginCall({email: email.current.value, password: password.current.value}, dispatch);
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
                    <input className="loginInput" placeholder="Email" type="email" ref={email} required minLength="6" />
                    <input className="loginInput" placeholder="Password" type="password" ref={password} required />                    
                    <button className="loginButton" type="submit" disabled={isFetching}>
                        {isFetching ? < CircularProgress color="inherit" size="20px"/> :"Log In"}
                    </button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="loginRegisterButton">
                        {isFetching ? < CircularProgress color="inherit" size="20px"/> :"Create a new account"}
                    </button>
                </form>
            </div>
        </div>
    </div>
    
  )
}
