import styled from "styled-components";

export const Container = styled.div`
  display: block;
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
export const Label = styled.h2`
  color: #fff;
`;
