import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  color: #e50914;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1.5em;
  width: 300px;
  margin: 1rem;
  @media only screen and (max-width: 650px) {
    font-size: 1.2em;
  }
`;
export const Plans = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Header = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 2.5em;
  @media only screen and (max-width: 650px) {
    font-size: 1.8em;
  }
`;
export const Button = styled.button`
  background-color: ${(props) => (props.outlined ? "transparent" : "#e50914")};
  border: ${(props) => (props.outlined ? "1px solid #e50914 " : "none")};
  outline: none;
  cursor: pointer;
  height: 2.2rem;
  width: 5rem;
  margin: 1rem 0.5rem 0.5rem 0.5rem;
  color: ${(props) => (props.outlined ? "#e50914 " : "#fff")};
`;
export const Top = styled.div`
  padding: 1rem;
`;
