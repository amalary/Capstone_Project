// import Post from "../Components/post/Post"
import Sidebar from "../Components/sidebar/Sidebar"
import SinglePost from "../Components/singlePost/SinglePost"
import "./single.css"

export default function Single() {
    return (
        <div className = "single">
            {/* <Post/> */}
            <SinglePost/>
            <Sidebar/>
            
        </div>
    )
}
