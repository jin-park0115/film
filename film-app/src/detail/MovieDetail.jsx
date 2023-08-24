import { styled } from "styled-components"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from 'react-icons/fa6'

const API_KEY = "c56d83fe927489921d3802aad330d3c9";


const MovieDetail = () => {
  const navigate = useNavigate()

  const handleBackButton = () => {
    navigate(-1)
  }

  const [movieInfo, setMovieInfo] = useState(null);
  const [credits, setCredits] = useState([])
  const [director, setDirector] = useState("")
  const { title } = useParams();

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&language=ko-KR`)
    .then(response => {
      const movieData = response.data.results[0];
      setMovieInfo(movieData)

      axios.get(`https://api.themoviedb.org/3/movie/${movieData.id}/credits?api_key=${API_KEY}&language=ko-KR`)
        .then(creditResponse => {
          const creditsData = creditResponse.data;
          if(Array.isArray(creditsData.cast)) {
            setCredits(creditsData.cast.slice(0,4))
          } else{
            setCredits([])
          }

          const  directorInfo = creditsData.crew.find(member => member.job === 'Director')
          if(directorInfo) {
            setDirector(directorInfo.name)
          }
        })
        .catch(creditError => {
          console.error('creditResponse Error', creditError)
        })
    })
    .catch(err => {
      console.err('에러', err)
    })
  }, [title])
 
  if (!movieInfo) {
    return <p>Loading...</p>;
  }

  return(
    <DetailCon>
      <Wrap>
        <BackButton onClick={handleBackButton}>
          <LeftArrow/>
        </BackButton>
        <ImgWrap>
          <Imge src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt="영화포스터"></Imge>
        </ImgWrap>
        <TextWrap>
          <Title>제목: {movieInfo.title}</Title>
          <Title>감독명: {director} </Title>
          <Title>배우명: {credits.map(actor => (
            <div key={actor.id}>{actor.name} - {actor.character}</div>
          ))}</Title>
          <Title>줄거리: {movieInfo.overview}</Title>
          <Title>개봉일: {movieInfo.release_date}</Title>
          <Title>평점: {movieInfo.vote_average}</Title>
        </TextWrap>
      </Wrap>
    </DetailCon>
  )
}

export default MovieDetail

const DetailCon = styled.div`
  position: absolute;
  width: 80%;
  height: 80%;
  top: 15%;
  left: 50%;
  transform: translate(-50%);
  background-color: #fff;
  border-radius: 15px;
`
const Wrap = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 130px;
`

const ImgWrap = styled.div`
  margin: 0 auto;
  height: 400px;
  box-shadow: 1px 3px 8px 1px #232323;
`

const Imge = styled.img`
  width: 100%;
  height: 100%;
`

const TextWrap = styled.div`
  width: calc(100% - 50%);
  
`

const Title = styled.p`
  color: #232323;
  font-size: 16px;
  margin-bottom: 12px;
`

const BackButton = styled.button`
  display: block;
  background: transparent;
  border: none;
  margin-bottom: 8px;
  cursor: pointer;
`
const LeftArrow = styled(FaArrowLeftLong)`
  font-size: 2rem;
`