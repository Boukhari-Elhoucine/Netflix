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
} from "../Styles/WelcomeStyles";
import axios from "../api/axios";
import { requests } from "../api/index";
import { Logo } from "../Styles/HomeStyles";
import Row from "./Row";
import { Avatar } from "@material-ui/core";
function Welcome() {
  const [movie, setMovie] = useState(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(requests.netflixOriginals);
      setMovie(response.data.results[Math.round(Math.random() * 20)]);
    }
    getMovies();
  }, []);
  const changeNavBar = () => {
    if (window.scrollY > 80) {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  window.addEventListener("scroll", changeNavBar);
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
              <Item>Movies</Item>
              <Item>TV</Item>
            </Nav>
          </Left>
          <Right>
            <Avatar
              variant="square"
              src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1"
            />
          </Right>
        </Menu>
        <MovieContainer>
          <Title>{movie?.name || movie?.originale_name}</Title>
          <Play>Play</Play>
        </MovieContainer>
      </Header>
      <Row url={requests.trending} label="Trending" />
      <Row url={requests.netflixOriginals} label="Netflix Original" />
      <Row url={requests.topRated} label="Top Rated" />
      <Row url={requests.action} label="Action" />
      <Row url={requests.horror} label="Horror" />
      <Row url={requests.romance} label="Romance" />
      <Row url={requests.animation} label="Animation" />
      <Row url={requests.comedy} label="Comedy" />
      <Row url={requests.drama} label="Drama" />
      <Row url={requests.sciFie} label="Science Fiction" />
    </Container>
  );
}

export default Welcome;
