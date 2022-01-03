import { Link } from "react-router-dom";
import "./navBar.css"

export default function NavBar() {
    const user = true;
    return (
        <div className = "nav">
            <div className = "topLeft ">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter"></i>
                <i className="topIcon fab fa-instagram"></i>
                <i className="topIcon fab fa-tiktok"></i>
            </div>
            <div className = "topCenter ">
                <ul className  = 'topList'>
                    <li className = "topListItem">
                        <Link className = "link"to ="/">Home</Link>
                    </li>
                    <li className = "topListItem"> <Link className = "link"to ="/">About</Link></li>
                    <li className = "topListItem"> <Link className = "link"to ="/">Contact</Link></li>
                    <li className = "topListItem"> <Link className = "link"to ="/write">Write</Link></li>
                    <li className = "topListItem">
                        {user && 'Logout'}
                    </li>
                
                </ul>
            
            </div>
            <div className = "topRight ">
                {
                    user ? (

                        <img className = "topImage"
                        src =  "https://external-preview.redd.it/0VDtPltJ_YFyW7UxSUNoJFiwlDmtKsDlBYv_06gRub8.png?width=640&crop=smart&format=pjpg&auto=webp&s=40772d8343b68d9b806ca407b09251c2a2e48f2f " alt = ""/>
                        
                    ): 
                    (
                        <ul className = "topList">
                            < li className = "topListItem">
                                <Link className = "link" to = "/login">Login</Link>

                            </li>
                            < li className = "topListItem">

                                <Link className = "link"to ="/register">Register</Link>
                            </li>

                        </ul>
                        
                    )
                }
                <i className="topSearchIcon fab fa-searchengin"></i>
            </div>
        </div>
    )
}
