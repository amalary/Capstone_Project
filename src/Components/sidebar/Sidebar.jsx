import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "sidebarItem">
                <span className = "sidebarTitle"> About Us</span>
                <img src = "https://images.unsplash.com/photo-1575305331117-0580726a1d34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80" alt = "" />
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus reiciendis officiis ducimus nisi suscipit dolore expedita. Perferendis ratione ab eum, voluptates explicabo animi blanditiis doloribus est molestiae, suscipit maiores.</p>
            
            </div>
            <div className = "sidebarItem">
                <span className = "sidebarTitle">Categories</span>
                <ul className = "sidebarList">
                    <li className = "sidebarListItem">About</li>
                    <li className = "sidebarListItem">Life</li>
                    <li className = "sidebarListItem">Music</li>
                    <li className = "sidebarListItem">Sports</li>
                </ul>
            </div>
            <div className = "sidebarItem">
                <span className = "sidebarTitle">Follow Us</span>
                <div className = "sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter"></i>
                    <i className="sidebarIcon fab fa-instagram"></i>
                    <i className="sidebarIcon fab fa-tiktok"></i>
                </div>


            </div>

        </div>
    )
}
