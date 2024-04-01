import { BrowserRouter, Route, Routes } from "react-router-dom"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
     <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/blog" element={<Blog/>} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/blog" element={<Blog/>} /> 
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
