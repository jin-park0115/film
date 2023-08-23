import { styled } from "styled-components";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import MoreMovie from "./MoreMovie";
const Main = () => {
  return (
    <>
      <MainNav>
        <Link to='/movieMore'>
          <MovieMore>영화 더보기</MovieMore>
        </Link>
        <Link to='/'>
          <Home>HOME</Home>
        </Link>
      </MainNav>
      <MovieList/>
    </>
  );
};

export const MainNav = styled.div`
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

const MovieMore = styled.div`
  font-size: 24px;
  font-weight: 300;
`
const Home = styled.h2`
  font-size: 24px;
  font-weight: 300;
`



export default Main;
