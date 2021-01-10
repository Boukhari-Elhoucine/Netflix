import React, { useRef, useEffect } from "react";
import YouTube from "react-youtube";
import { connect } from "react-redux";
import { VideoContainer, Overlay } from "../Styles/TrailerStyles";
import { setTrailer } from "../store/actions/searchActions";
function Trailer({ trailerUrl, set }) {
  const trailerRef = useRef();
  const ops = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (trailerRef.current && !trailerRef.current.contains(event.target)) {
        set();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [set]);
  if (trailerUrl) {
    return (
      <Overlay>
        <VideoContainer ref={trailerRef}>
          <YouTube videoId={trailerUrl} opts={ops} />
        </VideoContainer>
      </Overlay>
    );
  } else {
    return null;
  }
}
const mapStateToProps = (state) => {
  return {
    trailerUrl: state.result.movieTrailer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    set: () => dispatch(setTrailer()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Trailer);
