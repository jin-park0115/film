import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const TempImage = 'https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxNzA1MjRfMTI5%2FMDAxNDk1NjEyNzI1MDQ3.dPEpw2Kugjf522gXhq-DQ5X1pUjXayhCJXp_XMBYhP8g.HnVtjNugpWujXCPUAikMgQaK1wWSnG_gsFNpvgdF8uIg.JPEG%2FITn87prXZr9tueLOf2oMJHB48w9Y.jpg&type=a340'


function MovieCard() {
  const navigate = useNavigate();
  
  const GoDetail = () => {
    navigate('/movie/스파이더맨')
  }
  return (
    <Item onClick={GoDetail}>
      <Header>
        <Chip>01 아이언맨</Chip>
      </Header>
      <Body>
        <Image src={TempImage} alt="스파이더맨 포스터"/>
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

  display: flex;
  flex-direction: column;
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