import { styled } from "styled-components";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "c56d83fe927489921d3802aad330d3c9";

const MovieList = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
      )
      .then((response) => {
        const movieData = response.data.results.slice(0, 12);
        setPopularMovies(movieData);
        setLoading(false)
      })
      .catch((err) => {
        console.error("Error fetching", err);
      });
  }, []);

  if (loading)
    return (
      <Con>
        <LoadingSkeleton>Loading...</LoadingSkeleton>
      </Con>
    );

  return (
    <Con>
      <Title>인기 영화</Title>
      <List>
        {popularMovies.map((movie, index) => (
          <MovieCard key={index} title={movie.title} image={movie.poster_path} />
        ))}
      </List>
    </Con>
  );
};
const Con = styled.div`
  width: 80%;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%);
`;
const Title = styled.h1`
  margin-bottom: 16px;
  color: #080707;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;
const LoadingSkeleton = styled.h1`
  font-size: 40px;
  color: gainsboro;
`;

export default MovieList;
