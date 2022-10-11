import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Pages/Category";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Results from "./Components/Results";

const App = () => {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Category" element={<Category />}></Route>
        <Route path="/Results" element={<Results />}></Route>

      </Routes></BrowserRouter>
  )
}
export default App;