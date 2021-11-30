import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "sidebarItem">
                <span className = "sidebarTitle"> About Us</span>
                <img src = "https://images.unsplash.com/photo-1508108234793-7637b4299c81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt = "" />
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi temporibus reiciendis officiis ducimus nisi suscipit dolore expedita. Perferendis ratione ab eum, voluptates explicabo animi blanditiis doloribus est molestiae, suscipit maiores.</p>
            
            </div>
            <div className = "sidebarItem">
                <span className = "sidebarTItle">Categories</span>
                <ul className = "sidebarList">
                    <li className = "sidebarListItem">About Us</li>
                    <li className = "sidebarListItem">Life</li>
                    <li className = "sidebarListItem">Music</li>
                    <li className = "sidebarListItem">Sports</li>
                </ul>
            </div>
            <div className = "sidebarItem">
                

            </div>

        </div>
    )
}
