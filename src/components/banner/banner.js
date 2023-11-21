import React, { useEffect, useState } from 'react';
import { API_KEY ,imageUrl} from '../../constants/constants';
import axios from '../../axios';
import './banner.css';

function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        const firstMovie = response.data.results[1];
        console.log(response.data.results[1])
        setMovie(firstMovie);
      })
      .catch((error) => {
        console.error('Error fetching movie data:', error);
        // Handle error state if needed
      });
  }, []);

  return (
    <div 
    style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
      {movie && (
        <div className='content'>
          <h1 className='title'>{movie? movie.name:""}</h1>
          <div className='banner_buttons'>
            <button className='button'>Play</button>
            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
      )}

      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
