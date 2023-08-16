import axios from 'axios';

// export const API_KEY = 'e035559d2ffa712d612d79869ca7d545' 


export async function getData(){
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEY}&targetDt=20230812`

  try{
    const response = await axios.get(url);
    const data = response.data;
  } catch (error){
    console.error('Error fetching data')
  }
} 
getData()