import styled from "styled-components";

export const VideoContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 70% !important;
  height: auto !important;
  transform: translate(-50%, -50%);
  z-index: 100;
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;
