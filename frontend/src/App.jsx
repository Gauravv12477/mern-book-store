import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Navbar from "./Home/Navbar"
import Shop from "./shop/Shop"
import SingleBook from "./shop/SingleBook"

function App() {

  return (
    <>
     <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* {/* <Route path="/blog" element={<Blog/>} />  */}
          <Route path="/book/:id" element={<SingleBook/>}/>  
          <Route path="/shop" element={<Shop/>} /> 
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
