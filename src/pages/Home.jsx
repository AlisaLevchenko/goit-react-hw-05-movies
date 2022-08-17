import { getTrending } from '../api/Api';
import { useState, useEffect } from 'react';
import Section from '../components/section/Section';

export default function Home() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrending()
      .then(res => {
        setTrends(res.results);
      })
      .catch(error => console.log(error));
  }, []);

  return <Section title="Trending today" trends={trends} />;
}
