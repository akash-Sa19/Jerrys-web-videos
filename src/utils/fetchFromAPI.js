import axios from 'axios'

const base_url = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
    //   videoId: 'M7FIvfx5J10',
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY ,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${base_url}/${url}`, options);
   console.log('apple');
    return data;

}
export  {fetchFromAPI};