import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Components/Register";
import Preview from "./Pages/Preview";






const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
    

        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/preview" element={<Preview/>}/>

      </Routes>
      </BrowserRouter>
  )
}
export default App;