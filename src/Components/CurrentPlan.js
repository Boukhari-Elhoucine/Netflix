import React from "react";
import { Card, Button } from "../Styles/ProfileStyles";
import { connect } from "react-redux";
import { Cancel } from "../store/actions/paymentActions";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
function CurrentPlan({ plan, cancel, setActive, loading }) {
  const history = useHistory();
  return (
    <>
      {loading ? (
        <CircularProgress color="secondary" />
      ) : (
        <Card>
          <p>Name:{plan?.name}</p>
          <p>Price:{plan?.price}$</p>
          <p>Screens:{plan?.screen}</p>
          <p>Reslolution:{plan?.resolution}</p>
          <p>Quality:{plan?.quality}</p>
          <Button onClick={() => setActive(true)}>Change</Button>
          <Button outlined onClick={() => cancel(history)}>
            Cancel
          </Button>
        </Card>
      )}
    </>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    cancel: (history) => dispatch(Cancel(history)),
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.Sub.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CurrentPlan);
