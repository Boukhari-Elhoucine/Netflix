import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
`;
export const Posters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Poster = styled.img`
  height: 250px;
  padding: 0.5rem;
  object-fit: contain;
  transition: all 200ms ease;
  &:hover {
    transform: scale(1.05);
  }
`;
export const Label = styled.h2`
  color: #fff;
`;
