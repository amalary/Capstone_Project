import "./navBar.css"

export default function NavBar() {
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
                    <li className = "topListItem">News</li>
                    <li className = "topListItem">About</li>
                    <li className = "topListItem">Contact</li>
                    <li className = "topListItem">Write</li>
                    <li className = "topListItem">Logout</li>
                
                </ul>
            
            </div>
            <div className = "topRight ">
                <img className = "topImage"
                src =  "https://external-preview.redd.it/0VDtPltJ_YFyW7UxSUNoJFiwlDmtKsDlBYv_06gRub8.png?width=640&crop=smart&format=pjpg&auto=webp&s=40772d8343b68d9b806ca407b09251c2a2e48f2f " alt = ""/>
                <i className="topSearchIcon fab fa-searchengin"></i>
            </div>
        </div>
    )
}
