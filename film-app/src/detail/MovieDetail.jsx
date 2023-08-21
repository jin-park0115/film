import { styled } from "styled-components"

const example = 'https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87175/87175_320.jpg'

const MovieDetail = () => {
  return(
    <DetailCon>
      <Wrap>
        <ImgWrap>
          <Imge src={example} alt="영화포스터"></Imge>
        </ImgWrap>
        <TextWrap>
          <Title>제목: 오펜하이머</Title>
          <Title>감독명:</Title>
          <Title>배우명:</Title>
          <Title>줄거리:</Title>
          <Title>개봉일:</Title>
        </TextWrap>
      </Wrap>
    </DetailCon>
  )
}

export default MovieDetail

const DetailCon = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  top: 15%;
  left: 50%;
  transform: translate(-50%);
  background-color: #fff;
  border-radius: 15px;
`
const Wrap = styled.div`
  display: flex;
  margin-top: 48px;
  margin-left: 25%;
`

const ImgWrap = styled.div`
  width: 300px;
  height: 400px;
  margin-right: 14px;
  box-shadow: 1px 3px 8px 1px #232323;
`

const Imge = styled.img`
  width: 100%;
  height: 100%;
`

const TextWrap = styled.div`
  border: 1px solid #232323;
  width: 100%;
  height: 100px;
  
`

const Title = styled.h1`
  color: #232323;
  font-size: 16px;
`