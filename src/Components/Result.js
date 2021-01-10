import React, { useCallback, useContext } from "react";
import { Container, Header } from "../Styles/ResultStyles";
import Poster from "./Poster";
import { connect } from "react-redux";
import { ActiveContext } from "./ActiveContext";
import CircularProgress from "@material-ui/core/CircularProgress";
function Result({ searchResult, loading }) {
  const [active, setActive] = useContext(ActiveContext);
  const toggleActive = useCallback(
    (index) => {
      setActive(searchResult[index]);
    },
    [searchResult, setActive]
  );
  return (
    <>
      <Header>Search Result</Header>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <Container>
          {searchResult.map((movie, index) => (
            <Poster
              key={movie.id}
              movie={movie}
              index={index}
              toggleActive={toggleActive}
              search={true}
            />
          ))}
        </Container>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    searchResult: state.result.searchMovies,
    loading: state.result.loading,
  };
};
export default connect(mapStateToProps)(Result);
