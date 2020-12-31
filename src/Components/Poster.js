import React, { useEffect, useState, useContext } from "react";
import { Container, PosterImage } from "../Styles/PosterStyle";
import Details from "./Details";
import { ActiveContext } from "./ActiveContext";
function Poster({ movie, index, toggleActive }) {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useContext(ActiveContext);
  useEffect(() => {
    if (movie === active) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [movie, active]);
  return (
    <Container onClick={() => toggleActive(index)} active={toggle}>
      <PosterImage
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
      {toggle ? <Details movie={movie} /> : null}
    </Container>
  );
}

export default Poster;
