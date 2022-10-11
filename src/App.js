<<<<<<< HEAD
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Pages/Category";
import Results from "./Components/Results";

=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Pages/Category";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Results from "./Components/Results";
>>>>>>> 9829bb57fb7a9322a271606a73f72824a0d54f37

const App = () => {
  return (
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
<<<<<<< HEAD
        <Route path="/category" element={<Category />}></Route>
        <Route path="/results" element={<Results />}></Route>
      </Routes>
    </BrowserRouter>
=======
        <Route path="/Category" element={<Category />}></Route>
        <Route path="/Results" element={<Results />}></Route>

      </Routes></BrowserRouter>
>>>>>>> 9829bb57fb7a9322a271606a73f72824a0d54f37
  )
}
export default App;