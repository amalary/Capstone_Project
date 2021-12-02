import "./register.css"

export default function register() {
    return (
        <div className = "register">
            <span className="registerTitle">Register</span>
            <form  className="registerForm">

                <label>Username</label>
                <input type = "text"  className = "registerInput" placeholder = "Enter Username"></input>
                <label>Email</label>
                <input type = "text"  className = "registerInput" placeholder = "Enter Email"></input>
                <label>Password</label>
                <input type = "password" className = "registerInput" placeholder = "Password" ></input>
                <button className = "registerButton">Register</button>
            </form>
            <button className="registerLoginButton">Login</button>
            
        </div>
    )
}
