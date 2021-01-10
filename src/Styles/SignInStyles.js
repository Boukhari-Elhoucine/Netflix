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
  @media only screen and (max-width: 650px) {
    background: #000;
  }
`;
export const Box = styled.div`
  height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  width: 30vw;
  padding: 4rem 3rem;
  border-radius: 5px;
  @media only screen and (max-width: 1024px) {
    width: 50vw;
  }
  @media only screen and (max-width: 650px) {
    background-color: #000;
    height: 100%;
    width: 100vw;
  } ;
`;
export const Submit = styled.button`
  background-color: #e50914;
  border: 1px solid #e50914;
  border-radius: 5px;
  color: #fff;
  font-size: 1em;
  font-weight: bold;
  width: 100%;
  padding: 0.8rem 0;
  outline: none;
  cursor: pointer;
  margin-top: 10px;
`;
export const H2 = styled.h2`
  color: #fff;
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;
export const ErrorBox = styled.div`
  border: 1px solid #e50914;
  padding: 0.5rem 1rem;
`;
export const ErrorText = styled.p`
  color: #e50914;
`;
export const Header = styled.div`
  padding: 0.5rem 1rem;
`;
export const Text = styled.p`
  color: white;
`;
