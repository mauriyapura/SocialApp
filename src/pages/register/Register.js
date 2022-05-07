import "./register.css";

export const Register = () => {
  return (

    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social App</h3>
                <span className="loginDesc">Connect to friends around the world!</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input className="loginInput" placeholder="Username"></input>
                    <input className="loginInput" placeholder="Email"></input>
                    <input className="loginInput" placeholder="Password"></input>
                    <input className="loginInput" placeholder="Password again"></input>
                    <button className="loginButton">Sign Up</button>                    
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}
