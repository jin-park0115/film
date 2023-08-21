// import { styled } from "styled-components";
// import axios from "axios";
// import { API_KEY } from "../MovieDummy";
// import { useState, useEffect } from "react";
// import MovieNameChip from "../Common/MovieNameChip";

// const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=20230812`;


// const MoviePoster = () => {

//   const [movie, setMovie] = useState([]);
  
//   useEffect(() => {
//     axios
//       .get(url)
//       .then((res) => {
//         const movieList = res.data.boxOfficeResult.dailyBoxOfficeList.map(
//           (movie) => movie.movieNm
//         );
//         setMovie(movieList);
//       }) 
//       .catch((error) => console.error("에러", error));
//   }, []);
  

//   return (
//     <PosterContiner>
//       <Header>
//       </Header>
//       {
//         movie.map((movie, index) => {
//           return(
//             <Poster key={`${movie}_${index}`} name={movie}/>
//           )
//         })
//       }
//     </PosterContiner>
//   );
// };

// const PosterContiner = styled.section`
//   width: 70vw;
//   height: 508px;
//   margin: 0 auto;
//   margin-top: 88px;
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Header = styled.section`
//   display: flex;
//   flex-direction: row;

// `

// export default MoviePoster;
