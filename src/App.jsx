// import React from "react";
import { BrowserRouter as Router} from "react-router-dom"
import {Routes, Route} from "react-router-dom";
import  {Header} from "./components/Header";
import { User } from "./components/User";

export default function App() {

  return (
    <>
     <Router>
    <Header />
      <Routes>
        <Route exact path="/users" element={<User/>}/>
      </Routes>

     </Router>
     </>
    
  );
}

 
