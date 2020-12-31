import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: absolute;
  left: 15px;
  width: 97vw;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  justify-content: center;
  align-items: flex-start;
  height: 40vh;
`;
export const Right = styled.div`
  flex: 1;
  height: 45vh;
  position: relative;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-end;
`;
export const Overview = styled.div`
  color: white;
  margin: 0.5rem 0;
`;
export const Play = styled.button`
  background-color: #e50914;
  padding: 0.5rem 2rem;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;
export const Backdrop = styled.img`
  display: block;
  width: 100%;
  height: 45vh;
  position: relative;
`;
export const Gradient = styled.div`
  position: absolute;
  display: block;
  width: 50%;
  left: 5px;
  height: 45vh;
  background: linear-gradient(to left, transparent, rgba(0, 0, 0));
`;
