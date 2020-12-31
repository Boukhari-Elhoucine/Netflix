import React from "react";
import { Card, Button } from "../Styles/ProfileStyles";
import { connect } from "react-redux";
import { Cancel } from "../store/actions/paymentActions";
import { useHistory } from "react-router-dom";
function CurrentPlan({ plan, cancel, setActive }) {
  const history = useHistory();
  return (
    <Card>
      <p>{plan?.name}</p>
      <p>{plan?.price}</p>
      <p>{plan?.screen}</p>
      <p>{plan?.resolution}</p>
      <p>{plan?.quality}</p>
      <Button onClick={() => setActive(true)}>Change</Button>
      <Button outlined onClick={() => cancel(history)}>
        Cancel
      </Button>
    </Card>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    cancel: (history) => dispatch(Cancel(history)),
  };
};
export default connect(null, mapDispatchToProps)(CurrentPlan);
