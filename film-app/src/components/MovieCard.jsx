import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function MovieCard({title, image}) {
  const navigate = useNavigate();
  
  const GoDetail = () => {
    navigate(`/movie/${title}`)
  }


  return (
    <Item onClick={GoDetail}>
      <Header>
        <Chip>{title}</Chip>
      </Header>
      <Body>
        <Image src={`https://image.tmdb.org/t/p/w500/${image}`} alt={`${title} 포스터`}/>
      </Body>
    </Item>
  );
}

const Item = styled.li`
  border: 1px solid #272626;
  width: 250px;
  height: 350px;
  padding: 8px;
  box-shadow: 1px 0px 3px 1px #272626;
  padding: 10px;

  cursor: pointer;
`
const Header = styled.section`
  border-bottom: 1px solid #272626;
`
const Chip = styled.div`
  padding: 4px;
  margin-bottom: 4px;
  font-weight: 300;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const Body = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`
const Image = styled.img`
  width: 200px;
  height: 280px;
`



export default MovieCard;