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
import { connect } from "react-redux";
import { getTrailer } from "../store/actions/searchActions";
function Details({ movie, trailer }) {
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
        <Play
          onClick={() =>
            trailer(movie.name || movie.original_name || movie.title)
          }
        >
          Play
        </Play>
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
const mapDispatchToProps = (dispatch) => {
  return {
    trailer: (name) => dispatch(getTrailer(name)),
  };
};
export default connect(null, mapDispatchToProps)(Details);
