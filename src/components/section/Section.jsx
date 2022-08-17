import React from 'react';
import PropTypes from 'prop-types';
import MovieList from '../movieList/MovieList';

export default function Section({ title, children, trends }) {
  return (
    <div className="container">
      {title && <h1>{title}</h1>}
      {/* {children} */}
      <MovieList trends={trends}></MovieList>
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
