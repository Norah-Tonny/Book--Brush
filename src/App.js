
import Home from "./Pages/Home";
import  Category from "./Pages/Category";
import Results from "./Components/Results"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Components/Register";
import React from "react";

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        {/* <Route path="/category" element={<Category />}></Route>
        <Route path="/results" element={<Results/>}></Route>
        <Route path="/hello" element={<Hello/>}></Route> */}

        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
  
        <Route path="/results" element={<Results />}></Route>
        <Route path="/register" element={<Register />}></Route>

      </Routes>
      </BrowserRouter>
  )
}
export default App;