import { styled } from "styled-components";
import { API_KEY } from "../MovieDummy";
 

const Poster = (props) => {
  return (
    <PosterBox>
      {props.name}
    </PosterBox>
  );
};

const PosterBox = styled.div`
  width: 180px;
  height: 234px;
  background-color: aqua;
  border-radius: 15px;
`;

const PosterNm = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

export default Poster;
