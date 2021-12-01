import "./post.css"

export default function Post() {
    return (
        <div className = "post">
            <img className = "postImg"

            src = "https://images.unsplash.com/photo-1579992193972-f9b55a80aa3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt = " "
            
            />
            <div className="postInfo">

                <div className="postCats">
                    
                    <span className = "postCat">Music</span>
                    <span className = "postCat">Reviews</span>
                    <span className = "postCat">Albums</span>
                    <span className = "postCat">Misc</span>
                </div>
                <span className = "postTitle">
                    Lorem is in the house 
                </span>
                <hr/>
                <span className="postDate">1 day ago...</span>


            </div>
            
            
            
            
        </div>
    )
}
