import Home from "./Pages/Home";
import Login from "./pages/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category } from "@mui/icons-material";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" elements={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Category" element={<Category />}></Route>
        <Route path="/Results" element={<Results/>}></Route>

      </Routes></BrowserRouter>
  )
}
export default App;