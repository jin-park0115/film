import { styled } from "styled-components";
import { Link } from "react-router-dom";
import MoviePoster from './MoviePoster'
import MovieList from "./MovieList";
const Main = () => {
  return (
    <>
      <MainNav>
        <Link to='/endscreening'>
          <EndScreening>상영종료된영화</EndScreening>
        </Link>
        <Link to='/'>
          <Home>HOME</Home>
        </Link>
      </MainNav>
      <MovieList/>
    </>
  );
};

const MainNav = styled.div`
  width: 30%;
  border-bottom: 1px solid #292727 ;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: space-between;
  color: #fff;
`

const EndScreening = styled.div`
  font-size: 24px;
  font-weight: 300;
`
const Home = styled.h2`
  font-size: 24px;
  font-weight: 300;
`



export default Main;
