import Home from "./Pages/Home";
// import Login from "./pages/Login";
import  Category from "./Pages/Category";
import Results from "./Components/Results"
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        {/* <Route path="/category" element={<Category />}></Route>
        <Route path="/results" element={<Results/>}></Route>
        <Route path="/hello" element={<Hello/>}></Route> */}

      </Routes>
      </BrowserRouter>
  )
}
export default App;