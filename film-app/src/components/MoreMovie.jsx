import { styled } from "styled-components";
import { MainNav } from "./Main";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const API_KEY = "c56d83fe927489921d3802aad330d3c9";

const MoreMovie = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = 20;
  const pagesToShow = 5;
  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${currentPage}`
      )
      .then((response) => {
        const movieData = response.data.results;
        setMovies(movieData);
      })
      .catch((err) => {
        console.error("Error fetching", err);
      });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const halfVisiblePages = Math.floor(pagesToShow / 2);

    for (
      let i = currentPage - halfVisiblePages;
      i <= currentPage + halfVisiblePages;
      i++
    ) {
      if (i > 0 && i <= totalPage) {
        pageNumbers.push(
          <PageNumber
            key={i}
            active={i === currentPage}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PageNumber>
        );
      }
    }
    return pageNumbers;
  };

  return (
    <>
      <MainNav>
        <Link to="/">
          <Popular>인기영화</Popular>
        </Link>
        <Link to="/">
          <HomeCon>Home</HomeCon>
        </Link>
      </MainNav>
      <Container>
        <MovieList>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
            />
          ))}
        </MovieList>
      </Container>
      <Pagination>
        {currentPage > 1 && (
          <PageNumber onClick={() => handlePageChange(currentPage - 1)}>
            &lt;
          </PageNumber>
        )}
        {renderPageNumbers()}
        {currentPage < totalPage && (
          <PageNumber onClick={() => handlePageChange(currentPage + 1)}>
            &gt;
          </PageNumber>
        )}
      </Pagination>
    </>
  );
};

const HomeCon = styled.div`
  font-size: 24px;
`;
const Popular = styled.div`
  font-size: 24px;
`;

const Container = styled.div`
  position: relative;
  width: 80%;
  top: 8%;
  left: 50%;
  transform: translate(-50%);
`;

const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 200px;
`;

const PageNumber = styled.span`
  margin: 0 10px;
  cursor: pointer;
  color: ${({ active }) => (active ? "blue" : "black")};
`;

export default MoreMovie;
