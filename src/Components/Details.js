import React, { useContext } from "react";
import {
  Container,
  Left,
  Right,
  Overview,
  Play,
  Backdrop,
  Gradient,
} from "../Styles/DetailsStyles";
import { Title } from "../Styles/WelcomeStyles";
import TextTruncate from "react-text-truncate";
import CloseIcon from "@material-ui/icons/Close";
import { ActiveContext } from "./ActiveContext";
function Details({ movie }) {
  const [active, setActive] = useContext(ActiveContext);
  return (
    <Container>
      <Left>
        <Title row>{movie.name || movie.original_name || movie.title}</Title>
        <Overview>
          <TextTruncate
            line={2}
            element="p"
            truncateText="…"
            text={movie.overview}
          />
        </Overview>
        <Play>Play</Play>
      </Left>
      <Right>
        <Backdrop
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt="backdrop"
        />
        <CloseIcon
          style={{ color: "white", position: "absolute", cursor: "pointer" }}
          onClick={(event) => {
            event.stopPropagation();
            setActive("");
          }}
        />
        <Gradient />
      </Right>
    </Container>
  );
}

export default Details;
