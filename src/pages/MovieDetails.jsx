import React, { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getOneMovie } from '../api/Api';
import MovieInfo from 'components/movieInfo/MovieInfo';
import MovieAdditionalInfo from 'components/movieAdditionalInfo/MovieAdditionalInfo';
import Loader from 'components/loader/Loader';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getOneMovie(id)
      .then(res => {
        setMovie(res);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line
  }, [id]);

  return (
    <section>
      {movie && <MovieInfo movieInfo={movie} />}
      {movie && <MovieAdditionalInfo />}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
}
