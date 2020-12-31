import React, { useEffect, useState, useContext, useCallback } from "react";
import { Container, Label, Posters } from "../Styles/RowStyles";
import Poster from "./Poster";
import axios from "../api/axios";
import { ActiveContext } from "./ActiveContext";
function Row({ url, label, last }) {
  const [movies, setMovies] = useState([]);
  const [active, setActive] = useContext(ActiveContext);
  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(url);
      setMovies(response.data.results);
    }
    getMovies();
  }, [url]);
  const toggleActive = useCallback(
    (index) => {
      setActive(movies[index]);
    },
    [movies, setActive]
  );
  return (
    <Container noMargin={last}>
      <Label>{label}</Label>
      <Posters>
        {movies?.map((movie, index) => (
          <Poster
            key={movie.id}
            movie={movie}
            index={index}
            toggleActive={toggleActive}
          />
        ))}
      </Posters>
    </Container>
  );
}
export default React.memo(Row);
