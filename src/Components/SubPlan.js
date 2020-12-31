import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "../Styles/ProfileStyles";
import { Upgrade } from "../store/actions/paymentActions";
import { connect } from "react-redux";
function SubPlan({ name, upgrade }) {
  const [plans, setPlans] = useState([]);
  useEffect(() => {
    async function getPlans() {
      const response = await axios.post("http://localhost:5000/change", {
        current: name,
      });
      setPlans(response.data.response);
    }
    getPlans();
  }, [name]);
  return (
    <>
      {plans.map((plan) => (
        <Card key={plan.name}>
          <p>{plan?.name}</p>
          <p>{plan?.price}</p>
          <p>{plan?.screen}</p>
          <p>{plan?.resolution}</p>
          <p>{plan?.quality}</p>
          <Button
            onClick={() => {
              upgrade(plan.name);
            }}
          >
            Subscribe
          </Button>
        </Card>
      ))}
    </>
  );
}
const mapDispatchToPorps = (dispatch) => {
  return {
    upgrade: (name) => dispatch(Upgrade(name)),
  };
};
export default connect(null, mapDispatchToPorps)(SubPlan);
