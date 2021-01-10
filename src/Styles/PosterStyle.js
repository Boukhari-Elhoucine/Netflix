import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem;
  ${(props) => {
    if (props.active) {
      if (props.search) {
        return "min-height:560px;";
      } else {
        return "min-height:500px;";
      }
    }
  }}
`;
export const PosterImage = styled.img`
  height: 250px;
  object-fit: contain;
  cursor: pointer;
  transition: all 200ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;
