import React, { useEffect, useState } from "react";
import {
  Container,
  Header,
  Menu,
  Left,
  Right,
  Nav,
  Item,
  Title,
  MovieContainer,
  Play,
  List,
  ListItem,
  Search,
  SearchField,
} from "../Styles/WelcomeStyles";
import axios from "../api/axios";
import { requests } from "../api/index";
import { Logo } from "../Styles/HomeStyles";
import Row from "./Row";
import { Avatar } from "@material-ui/core";
import { useSpring } from "react-spring";
import { connect } from "react-redux";
import { Logout } from "../store/actions/authActions";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { ActiveProvider } from "./ActiveContext";
import {
  SearchMovies,
  getTrailer,
  setSearch,
} from "../store/actions/searchActions";
import Result from "./Result";
import Trailer from "./Trailer";
function Welcome({ Signout, getResults, searchResult, trailer, SetMovies }) {
  const [movie, setMovie] = useState(null);
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchActive, setSearchActive] = useState(false);
  const history = useHistory();
  const Animation = useSpring({
    height: open ? 80 : 0,
    opacity: open ? 1 : 0,
    from: { height: 0, opacity: 0 },
  });
  const inputAnimation = useSpring({
    width: searchActive ? 200 : 0,
    opacity: searchActive ? 1 : 0,
    from: { width: 0, opacity: 0 },
  });
  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(requests.netflixOriginals);
      setMovie(response.data.results[Math.round(Math.random() * 20)]);
    }
    getMovies();
  }, []);
  const showNavBar = () => {
    if (window.scrollY > 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", showNavBar);
    return () => {
      window.removeEventListener("scroll", showNavBar);
    };
  }, []);
  return (
    <Container>
      <Header backgroundImage={movie?.backdrop_path}>
        <Menu active={active}>
          <Left>
            <Logo
              src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
              alt="netflix"
            />
            <Nav>
              <Item onClick={() => SetMovies()}>Movies</Item>
            </Nav>
          </Left>
          <Right>
            <Search
              onSubmit={(event) => {
                event.preventDefault();
                if (searchValue) {
                  getResults(searchValue);
                }
              }}
            >
              <SearchIcon
                style={{ color: "#e50914", cursor: "pointer" }}
                onClick={() => setSearchActive((prev) => !prev)}
              />
              <SearchField
                placeholder="search..."
                style={inputAnimation}
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
            </Search>
            <Avatar
              variant="square"
              src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1"
              style={{ cursor: "pointer" }}
              onClick={() => setOpen((prev) => !prev)}
            />
            <List style={Animation}>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <ListItem>Profile</ListItem>
              </Link>
              <ListItem
                onClick={() => {
                  Signout(history);
                }}
              >
                Log out
              </ListItem>
            </List>
          </Right>
        </Menu>
        <MovieContainer>
          <Title>{movie?.name || movie?.originale_name}</Title>
          <Play onClick={() => trailer(movie?.name || movie?.originale_name)}>
            Play
          </Play>
        </MovieContainer>
      </Header>
      {searchResult ? (
        <ActiveProvider>
          <Result />
        </ActiveProvider>
      ) : (
        <ActiveProvider>
          <Row url={requests.trending} movies label="Trending" />
          <Row url={requests.netflixOriginals} label="Netflix Original" />
          <Row url={requests.topRated} label="Top Rated" />
          <Row url={requests.action} label="Action" />
          <Row url={requests.horror} label="Horror" />
          <Row url={requests.romance} label="Romance" />
          <Row url={requests.animation} label="Animation" />
          <Row url={requests.comedy} label="Comedy" />
          <Row url={requests.drama} label="Drama" />
          <Row url={requests.sciFie} label="Science Fiction" last={true} />
        </ActiveProvider>
      )}
      <Trailer />
    </Container>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    Signout: (history) => dispatch(Logout(history)),
    getResults: (name) => dispatch(SearchMovies(name)),
    trailer: (name) => dispatch(getTrailer(name)),
    SetMovies: () => dispatch(setSearch()),
  };
};
const mapStateToProps = (state) => {
  return {
    searchResult: state.result.searchMovies,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
