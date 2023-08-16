import { styled } from "styled-components";
import Banner from "./Banner";
import MoviePoster from "./MoviePoster";

const Main = () => {
  return (
    <MainSection>
      <Banner />
      <MoviePoster />
    </MainSection>
  );
};

const MainSection = styled.main`
  width: calc(100% - 228px);
  position: absolute;
  top: 0px;
  left: 231px;
  height: 100%;
`;

export default Main;
