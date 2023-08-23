import { Routes, Route } from "react-router-dom"
import Main from "../components/Main"
import LoginPage from "../components/LoginPage"
import SignUp from '../SignUp/SignUp'
import SearchPage from "../components/SearchPage"
import MovieDetail from "../Detail/MovieDetail"
import MoreMovie from "../components/MoreMovie"

 
const PageNavigator = () => {
  return(
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/login" element={<LoginPage/> }/>
      <Route path='/signup' element={<SignUp/>} />
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/movieMore" element={<MoreMovie/>} />
      <Route path="/movie/:title" element={<MovieDetail/>}/>
  </Routes>
  )
}

export default PageNavigator