import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

export default function MovieAdditionalInfo() {
  const location = useLocation();

  return (
    <div>
      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="cast" state={location.state}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" state={location.state}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
