import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Searchbar from '../components/searchbar/Searchbar';
import { getSearchMovies } from '../api/Api';
import MoviesList from '../components/movieList/MovieList';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const [serchParams] = useSearchParams();
  // const [loading, setLoading] = useState(false);

  const handleFormSubmit = query => {
    setQuery(query);
    navigate(`?query=${query}`);
  };

  useEffect(() => {
    console.log(query);
    const serchQuery = serchParams.get('query');

    if (!serchQuery) {
      return;
    }
    // setLoading(true);
    getSearchMovies(serchQuery)
      .then(res => {
        // console.log(res);
        if (res.length === 0) {
          setMovies([]);
          alert("We don't have any movie with that name");
          return;
        }
        setMovies(res);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line
  }, [query, serchParams]);

  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies && movies.length > 0 && <MoviesList trends={movies} />}
    </div>
  );
}
