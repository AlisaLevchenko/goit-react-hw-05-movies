import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from '../../api/Api';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(id)
      .then(res => {
        setReviews(res);
      })
      .catch(error => console.log(error));
    // eslint-disable-next-line
  }, [id]);

  return (
    <div>
      {reviews.length ? (
        <ul>
          {reviews.map(el => (
            <li key={el.id}>
              <p>Author: {el.author}.</p>
              <p>{el.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        "We don't have any reviews for this movie"
      )}
    </div>
  );
}
