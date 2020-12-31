import React, { useState, useEffect } from "react";
import { Container } from "../Styles/WelcomeStyles";
import { Header, Plans } from "../Styles/ProfileStyles";
import CurrentPlan from "./CurrentPlan";
import SubPlan from "./SubPlan";
import axios from "axios";
function Profile() {
  const [plan, setPlan] = useState(null);
  useEffect(() => {
    async function getPlan() {
      axios.defaults.withCredentials = true;
      const response = await axios.get("http://localhost:5000/profile");
      setPlan(response.data.response);
    }
    getPlan();
  }, []);
  const [active, setActive] = useState(false);
  return (
    <Container>
      <Header>My Plans</Header>
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
