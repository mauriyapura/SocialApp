import "./login.css";

export const Login = () => {
  return (

    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social App</h3>
                <span className="loginDesc">Connect to friends around the world!</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input className="loginInput" placeholder="Email"></input>
                    <input className="loginInput" placeholder="Password"></input>                    
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot password?</span>
                    <button className="loginRegisterButton">Create a new Account</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}
