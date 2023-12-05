 import axios from "axios";
 const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
 

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

// export const fetchFromAPI = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//   return data;
// };
 export const fetchFromAPI = async (url) => {
   try {
     const response = await axios.get(`${BASE_URL}/${url}`, options);
     console.log('API Response:', response);
     const { data } = response;
     return data;
   } catch (error) {
     console.error('Error fetching data from API:', error);
     throw error;
   }
 };


