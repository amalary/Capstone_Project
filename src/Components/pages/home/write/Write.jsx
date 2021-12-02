import "./write.css"

export default function Write() {
    return (
        <div className = "write">
            <img className = "writeImage" src = "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt = " " />
            <form className = "writeForm">

                <div className="writeFormGroup">
                    <label htmlFor = "fileInput">
                    <i className=" writeIcon far fa-plus-square"></i>

                    </label>

                    <input type = "file" id = "fileInput" style = {{display:"none"}} />
                    <input type = "text" placeholder = "Title" className = "writeInput" autofocus = {"true"} />
                </div>

                <div className="writeFormGroup">

                    <textarea  placeholder = "Want to write a blog post ?" type = "text" className = "writeInput writeText" ></textarea>
                </div>
                <button className = "writeSubmit">Compose</button>




            </form>
        </div>
    )
}
