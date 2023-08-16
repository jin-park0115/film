import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import LoginPage from "./components/LoginPage"


const PageNavigator = () => {
  return(
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  )
}