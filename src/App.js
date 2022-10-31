
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopBar from "./Components/TopBar";
import Home from "./Pages/Home"
import About from "./Pages/About"
import Login from "./Pages/Login"
import Contact from "./Pages/Contact"
import Register from "./Pages/Register"
import Single from "./Pages/Single"
import Settings from "./Pages/Settings"
import Write from "./Pages/Write"
import React, { useContext } from "react"

import { Context } from "./context/Context"
import './App.css';
function App() {

  const { user } = useContext(Context)
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Routes>
          {/* <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={user ? <Home /> : <Login />}></Route>
          <Route path="/register" element={user ? <Home /> : <Register />}> </Route>
          <Route path="/Settings" element={user ? <Settings /> : <Register />}> </Route>
          <Route path="/write" element={user ? <Write /> : <Register />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/post/:postid" element={<Single />}> </Route> */}
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}> </Route>

          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Settings" element={<Settings />}> </Route>
          
          <Route path="/write" element={<Write />}> </Route>
          <Route path="/contact" element={<Contact />}> </Route>
          <Route path="/about" element={<About />}> </Route>
          <Route path="/post/:postid" element={<Single />}> </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
