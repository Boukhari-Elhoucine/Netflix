import styled from "styled-components";
import { animated } from "react-spring";
export const Container = styled.div`
  background-color: #000;
  min-height: 100vh;
`;
export const Header = styled.div`
  position: relative;
  height: 90vh;
  background-image: ${(props) =>
    props.backgroundImage &&
    `url(https://image.tmdb.org/t/p/original/${props.backgroundImage})`};
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 300px;
    position: absolute;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, rgba(0, 0, 0));
  }
`;
export const Menu = styled.div`
  position: fixed;
  display: flex;
  height: 10vh;
  width: 100%;
  background: ${(props) =>
    props.active
      ? "#000"
      : `linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.67),
    rgba(0, 0, 0, 0)
  );`};
  padding: 0 1rem;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
`;
export const Search = styled.form`
  display: flex;
  margin-right: 0.5rem;
`;
export const SearchField = styled(animated.input)`
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
  outline: none;
  margin-left: 0.3rem;
  border-radius: 5px;
  padding: 0.3rem;
  &::placeholder {
    color: white;
  }
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const Nav = styled.ul`
  list-style: none;
  display: flex;
`;
export const Item = styled.li`
  color: white;
  margin: 0 1rem;
  cursor: pointer;
  transition: color 300ms ease-in-out;
  &:hover {
    color: #e50914;
  }
`;
export const Title = styled.h2`
  color: white;
  font-size: ${(props) => (props.row ? "1.5em" : "2em")};
  margin-bottom: 0.5rem;
`;
export const MovieContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
  z-index: 2;
`;
export const Play = styled.button`
  background-color: #aaa;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all 500ms ease;
  &:hover {
    background-color: #e50914;
    color: #fff;
  }
`;
export const List = styled(animated.ul)`
  list-style: none;
  background-color: #000;
  position: absolute;
  right: 2rem;
  top: 3.1rem;
  border-radius: 5px;
`;
export const ListItem = styled.li`
  color: #fff;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  transition: background 200ms ease;
  &:hover {
    color: #e50914;
  }
`;
