import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "../Styles/ProfileStyles";
import { Upgrade } from "../store/actions/paymentActions";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
function SubPlan({ name, upgrade, loading }) {
  const [plans, setPlans] = useState([]);
  const history = useHistory();
  useEffect(() => {
    async function getPlans() {
      const response = await axios.post(
        "https://netflixbackend.herokuapp.com/change",
        {
          current: name,
        }
      );
      setPlans(response.data.response);
    }
    getPlans();
  }, [name]);
  if (loading) {
    return <CircularProgress color="secondary" />;
  } else {
    return (
      <>
        {plans.map((plan) => (
          <Card key={plan.name}>
            <p>Name:{plan?.name}</p>
            <p>Price:{plan?.price}$</p>
            <p>Screens:{plan?.screen}</p>
            <p>Resolution:{plan?.resolution}</p>
            <p>Quality:{plan?.quality}</p>
            <Button
              onClick={() => {
                upgrade(plan.name, history);
              }}
            >
              Subscribe
            </Button>
          </Card>
        ))}
      </>
    );
  }
}
const mapDispatchToPorps = (dispatch) => {
  return {
    upgrade: (name, history) => dispatch(Upgrade(name, history)),
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.Sub.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToPorps)(SubPlan);
