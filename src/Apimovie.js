
// tidak ditaruh env karena hanya untuk test saja
import axios from 'axios';


const Api_key = '081a0dd3f2d1df2a09474f9f40bca9a5';

const Access_token ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODFhMGRkM2YyZDFkZjJhMDk0NzRmOWY0MGJjYTlhNSIsInN1YiI6IjY1NzNlN2U5YzA5ZTk5MDBjNmUzYmNhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fvIzTNf2V2sA41Qkd0dnXugm1G3DemrSaBnF4AxikuQ'

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${Access_token}`
  }
};

export const Apimovie = async (url) => {
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

