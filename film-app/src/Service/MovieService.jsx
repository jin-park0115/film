import axios from "axios";
// 예시) http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json.jsp?

const API_KEY = "M5JPM54U6ML303W756L5";

const Remote = axios.create()


export const FetchMovies = async () => {
  const baseUrl = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${API_KEY}&releaseDts=20230701&releaseDte=20230821&type=극영화&detail=y`

  const response = await Remote.get(baseUrl)

  return response;
}

