import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  background-image: url("https://authors.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;
export const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem 1.2rem;
  border-radius: 5px;
`;
export const Submit = styled.button`
  background-color: #e50914;
  border: 1px solid #e50914;
  border-radius: 5px;
  color: #fff;
  font-size: 1em;
  width: 100%;
  padding: 0.5rem 0;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
`;
export const H2 = styled.h2`
  color: #fff;
  font-size: 2em;
  font-weight: bold;
`;
