import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function MovieList({ trends }) {
  const location = useLocation();
  return (
    <div>
      <ul>
        {trends &&
          trends.map(el => (
            <li key={el.id}>
              <NavLink to={`/movie/${el.id}`} state={location}>
                {el.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
}
