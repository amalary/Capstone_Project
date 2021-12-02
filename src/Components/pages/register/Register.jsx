import "./register.css"

export default function register() {
    return (
        <div className = "register">
            <span className="registerTitle">Register</span>
            <form  className="registerForm">

                <label className = "userNameTitle">Username</label>
                <input type = "text"  className = "registerInput" placeholder = "Enter Username"></input>
                <label className ="emailNameTitle">Email</label>
                <input type = "text"  className = "registerInput" placeholder = "Enter Email"></input>
                <label className = "passwordNameTitle">Password</label>
                <input type = "password" className = "registerInput" placeholder = "Password" ></input>
                <button className = "registerButton">Register</button>
            </form>
            <button className="RegisterLoginButton">Login</button>
            
        </div>
    )
}
