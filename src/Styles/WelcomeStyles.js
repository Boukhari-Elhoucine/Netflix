import styled from "styled-components";

export const Container = styled.div`
  background-color: #000;
  min-height: 100vh;
`;
export const Header = styled.div`
  position: relative;
  height: 70vh;
  background-image: ${(props) =>
    props.backgroundImage &&
    `url(https://image.tmdb.org/t/p/original/${props.backgroundImage})`};
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
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
export const Right = styled.div``;
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
`;
export const Title = styled.h2`
  color: white;
  font-size: 2em;
  margin-bottom: 0.5rem;
`;
export const MovieContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 2%;
  transform: translateY(-50%);
`;
export const Play = styled.button`
  background-color: #aaa;
  padding: 0.5rem 2rem;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: 200ms ease;
  &:hover {
    background-color: #777;
  }
`;
