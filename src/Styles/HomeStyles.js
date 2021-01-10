import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #222;
  z-index: -1;
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 12vh;
  padding: 0 3.5rem;
`;
export const Logo = styled.img`
  max-height: 40px;
  object-fit: contain;
  @media only screen and (max-width: 510px) {
    height: 20px;
  }
`;
export const SignIn = styled.button`
  background-color: #e50914;
  border: 1px solid #e50914;
  color: #fff;
  font-size: 1em;
  padding: 7px 15px;
  cursor: pointer;
  border-radius: 2px;
  outline: none;
`;

export const Hero = styled.section`
  position: relative;
  height: 100vh;
  background-image: url("https://authors.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  z-index: 0;
  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;
export const Banner = styled.div`
  height: 88vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const H1 = styled.h1`
  color: #fff;
  font-size: 3em;
  font-weight: bold;
  @media only screen and (max-width: 650px) {
    font-size: 1.5em;
  }
  @media only screen and (max-width: 450px) {
    font-size: 1.2em;
  }
`;
export const H2 = styled.h2`
  margin-top: 10px;
  color: #fff;
  font-size: 2em;
  font-weight: normal;
  @media only screen and (max-width: 650px) {
    font-size: 1em;
  }
`;
export const H3 = styled.h3`
  margin-top: 15px;
  color: #fff;
  font-weight: normal;
  @media only screen and (max-width: 650px) {
    font-size: 0.7em;
  }
`;
export const Start = styled.button`
  margin-top: 10px;
  background-color: #e50914;
  border: 1px solid #e50914;
  color: #fff;
  font-size: 1.5em;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 2px;
  cursor: pointer;
`;
export const Section = styled.section`
  margin-top: 1rem;
  background-color: #000;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SectionContent = styled.div`
  width: 80%;
  display: flex;
  @media only screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
export const Tv = styled.img`
  object-fit: contain;
  max-height: 250px;
  flex: 1;
`;
