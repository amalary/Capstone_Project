import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className = "singlePost">
            <div className="singlePostWrapper">

                <img  src = "https://images.unsplash.com/photo-1605286111427-67133b091012?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt = "" className = "singlePostImg" />
                <h1 className="singlePostTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <div className="singlePostEdit">

                <i className="singlePostIcon fas fa-edit"></i>
                <i className="singlePostIcon fas fa-ban"></i>
                </div>
                </h1>
                <div className="singlePostInfo">

                    <span className = "singlePostAuthor">Author <b>Malcom Gladwell</b></span>
                    <span className = "singlePostDate"> 3 years ago</span>
                </div>
                <p className = "singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente harum blanditiis maiores eaque amet dolore ex totam laudantium, autem nulla corporis? Harum optio velit, repellendus consequuntur itaque nesciunt minus ex!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aperiam repudiandae numquam tenetur soluta illo tempore ratione porro, fugit, aliquam exercitationem? Natus exercitationem vero debitis possimus culpa, placeat dicta soluta.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex laborum blanditiis voluptates odio esse quos rerum quaerat, architecto fuga deleniti voluptate quam. Maxime, quo? Ex aliquam delectus fuga tenetur! Architecto.
                </p>
            </div>
        </div>
    )
}
