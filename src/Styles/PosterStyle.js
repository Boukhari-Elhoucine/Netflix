import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem;
  transition: all 200ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;
export const PosterImage = styled.img`
  height: 250px;
  object-fit: contain;
`;
