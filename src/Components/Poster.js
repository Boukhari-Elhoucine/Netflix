import React, { useState } from "react";
import { Container, PosterImage } from "../Styles/PosterStyle";
function Poster({ movie }) {
  const [details, setDetails] = useState(false);
  return (
    <Container>
      <PosterImage
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
    </Container>
  );
}

export default Poster;
