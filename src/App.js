
// import Home from "./Pages/Home";
// // import Login from "./pages/Login";
// import  Category from "./Pages/Category";
// import Results from "./Components/Results"
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Preview from "./Components/Preview";


const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/h" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>  
        <Route path="/" element={<Preview />}></Route>

      </Routes>
      </BrowserRouter>
  )
}
export default App;