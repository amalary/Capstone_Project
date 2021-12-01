import Home from "./pages/home/Home";
import NavBar from "./navbar/NavBar";
import Sidebar from "./sidebar/Sidebar"
import Posts from "./posts/Posts";



function App() {
  return (
    <div className = "Containter"> 

      <NavBar/>
      <Home />
      <Posts/>
      <Sidebar/>



    </div>
  );
}

export default App;
