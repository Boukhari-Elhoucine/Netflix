import React, { useEffect, useState } from "react";
import { Container, Label, Posters } from "../Styles/RowStyles";
import Poster from "./Poster";
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
          <Poster key={movie.id} movie={movie} />
        ))}
      </Posters>
    </Container>
  );
}
export default React.memo(Row);
