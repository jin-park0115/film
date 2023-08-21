import { styled } from "styled-components"
import MoviePoster from "./MoviePoster"
import MovieCard from "./MovieCard"
import { useEffect } from "react"
import { FetchMovies } from "../Service/MovieService"

const MovieList = () => {
  useEffect(() => {
    (async()=> {
      const result = await FetchMovies();
      console.log(result.data)
    })()
  },[])

  return(
    <List>
      {
        Array.from({ length : 10 }).map((_, index) => {
          return (
            <MovieCard key ={index}/>
          )
        })
      }
    </List>
  )
}

const List = styled.ul`
  width: 80%;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 10px;
`

export default MovieList