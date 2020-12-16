import React, { useEffect, useState } from "react";
import { Container, Poster, Label, Posters } from "../Styles/RowStyles";
import axios from "../api/axios";
function Row({ url, label }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(url);
      setMovies(response.data.results);
    }
    getMovies();
  }, [url]);
  return (
    <Container>
      <Label>{label}</Label>
      <Posters>
        {movies?.map((movie) => (
          <Poster
            key={movie.id}
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          />
        ))}
      </Posters>
    </Container>
  );
}

export default React.memo(Row);
