import "./settings.css"
import Sidebar from "../../../sidebar/Sidebar"

export default function Settings() {
    return (
        <div className = "settings">
            <div className="settingsWrapper"></div>
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Account</span>
                <span className="settingsDeleteTitle">Delete</span>
            </div>
            <form className="settingsForm"> 
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img src = "https://external-preview.redd.it/0VDtPltJ_YFyW7UxSUNoJFiwlDmtKsDlBYv_06gRub8.png?width=640&crop=smart&format=pjpg&auto=webp&s=40772d8343b68d9b806ca407b09251c2a2e48f2f" alt = ""/>
                <label htmlFor = "fileInput"> 
                    <i class="settingPPIcon fas fa-user-alt"></i>
                
                </label>
                <input type ="file" id = "fileInput" style = {{display:'none'}}></input>

            </div>
            <label>Username</label>
            <input type="text" placeholder ="Howey S"/>
            <label>Email</label>
            <input type="email" placeholder ="HoweyS@gmail.com"/>
            <label>Password</label>
            <input type="password"/>
            <button className = "settingsSubmit">Update</button>
            
            </form>
            <Sidebar/>
            
        </div>
    )
}
