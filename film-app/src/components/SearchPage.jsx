import { styled } from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from 'react-icons/fa6'
const API_KEY = "c56d83fe927489921d3802aad330d3c9";

const SearchPage = () => {

  const navigate = useNavigate()
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleBack = () => {
    navigate(-1)
  }

  const handleSearch = (movieTitle) => {
    setQuery(movieTitle)
    setSuggestions([])
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      navigate(`/movie/${query}`)
    }
  }

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`
        );
        setSuggestions(response.data.results);
      } catch (err) {
        console.error("error", err);
      }
    };
    fetchData();
  }, [query]);

  return (
    <WholeBox>
      <BackButton onClick={handleBack}>
        <LeftArrow/>
      </BackButton>
      <>
        <InputBox>
        <Input
          type="text"
          placeholder="찾으시는 영화를 입력해주세요."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        </InputBox>
        <DropDownBox>
          {suggestions.map((movie) => (
            <DropDownItem key={movie.id} onClick={() => handleSearch(movie.title)}>{movie.title}</DropDownItem>
          ))}
        </DropDownBox>
      </>
    </WholeBox>
  );
};

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

const activeBorderRadius = "16px 16px 0 0";
const inactiveBorderRadius = "16px 16px 16px 16px";

const WholeBox = styled.div`
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translate(-50%);
  width: 60%;
  padding: 10px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
  padding: 16px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: ${(props) =>
    props.isHaveInputValue ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;

  &:focus-within {
    box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  }
`;

const Input = styled.input`
  flex: 1 0 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  color: #fff;
`;

const DropDownBox = styled.ul`
  display: block;
  margin: 0 auto;
  padding: 8px 0;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  border-radius: 0 0 16px 16px;
  box-shadow: 0 10px 10px rgb(0, 0, 0, 0.3);
  list-style-type: none;
  z-index: 3;
`;

const DropDownItem = styled.li`
  padding: 0 16px;

  &.selected {
    background-color: lightgray;
  }
  &:hover{
    background-color: #405466;
    color: #fff;
  }
`;

export default SearchPage;
