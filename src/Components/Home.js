import React from "react";
import {
  Container,
  Hero,
  Logo,
  Header,
  SignIn,
  H1,
  H2,
  H3,
  Banner,
  Start,
  Section,
  SectionContent,
  Tv,
} from "../Styles/HomeStyles";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Container>
      <Hero>
        <Header>
          <Logo
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt="netflix"
          />
          <Link to="/login">
            <SignIn>Sign in</SignIn>
          </Link>
        </Header>
        <Banner>
          <H1>Unlimited movies, TV shows, and more.</H1>
          <H2>Watch anywhere. Cancel anytime.</H2>
          <H3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </H3>
          <Link to="/signup">
            <Start>GET STARTED</Start>
          </Link>
        </Banner>
      </Hero>
      <Section>
        <SectionContent>
          <div style={{ flex: 1 }}>
            <H1>Enjoy on your TV.</H1>
            <H2>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more.
            </H2>
          </div>
          <Tv src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2019/07/Netflix-English-user-interface.jpg" />
        </SectionContent>
      </Section>
    </Container>
  );
}

export default Home;
