import React, { useState, useEffect } from "react";
import { Container } from "../Styles/WelcomeStyles";
import { Header, Plans, Top } from "../Styles/ProfileStyles";
import CurrentPlan from "./CurrentPlan";
import SubPlan from "./SubPlan";
import axios from "axios";
import { Logo } from "../Styles/HomeStyles";
import { Link } from "react-router-dom";
function Profile() {
  const [plan, setPlan] = useState(null);
  useEffect(() => {
    async function getPlan() {
      axios.defaults.withCredentials = true;
      const response = await axios.get(
        "https://netflixbackend.herokuapp.com/profile"
      );
      setPlan(response.data.response);
    }
    getPlan();
  }, []);
  const [active, setActive] = useState(false);
  return (
    <Container>
      <Top>
        <Link to="/home">
          <Logo
            src="https://www.freepnglogos.com/uploads/red-netflix-logo-text-png-3.png"
            alt="netflix"
          />
        </Link>
      </Top>
      <Header>My Plan</Header>
      <Plans>
        {active ? (
          <SubPlan name={plan.name} />
        ) : (
          <CurrentPlan plan={plan} setActive={setActive} />
        )}
      </Plans>
    </Container>
  );
}
export default Profile;
