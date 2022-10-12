

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Preview from "./Components/Preview";




const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/preview" element={<Preview/>}/>

      </Routes>
      </BrowserRouter>
  )
}
export default App;