import React from "react";
import NavBar from "./Components/navbar/NavBar";
import Home from "./Components/pages/home/Home"
import Register from "./Components/pages/register/Register"
import Login from "./Components/pages/login/Login";
import Write from "./Components/pages/home/write/Write"
import Settings from "./Components/pages/home/settings/Settings"
import Single from "./single/Single"
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";






function App() {
  const user = false;
  return (
    <div> 
    <Router>
        <NavBar/>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route path="/register">
            {user ? <Home/>: <Register />}
        </Route>
        <Route path="/login">
            {user ? <Home/>:<Login />}
        </Route>
        <Route path="/write">
            {user ? <Write/>: <Register/>}
        </Route>
        <Route path="/settings">
            {user ? <Settings/>: <Register/>}
        </Route>
        <Route path="/post/:postid">
            <Single />
        </Route>


        </Switch>
    


    </Router>

      
      
      
    



    </div>
  );
}

export default App;
