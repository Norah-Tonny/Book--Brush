

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Preview from "./Components/Preview";
import Preview from "./Pages/Preview";



const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/h" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>  
        <Route path="/" element={<Preview />}></Route>

        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/preview" element={<Preview/>}/>

      </Routes>
      </BrowserRouter>
  )
}
export default App;