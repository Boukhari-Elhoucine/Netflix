import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
export const Section = styled.section`
  border-top: 1px solid #eee;
  min-height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StepperContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;
export const StepContainer = styled.div`
  @media only screen and (max-width: 550px) {
    ${(props) => {
      if (props.step === 1) {
        return `display:flex;
        flex-direction : column;
        align-items:center;
      `;
      }
    }}
  }
`;
export const Label = styled.label`
  margin: 10px;
  display: inline-block;
  width: 180px;
  height: 200px;
  text-align: center;
  border: ${(props) =>
    props.checked ? "3px solid red" : "3px solid transparent"};
  border-radius: 10px;
  box-shadow: 0 0 20px #c3c3c367;
  cursor: pointer;
`;
export const Desc = styled.div`
  text-align: start;
  padding: 0.5rem;
`;
export const Radio = styled.input`
  display: none;
`;
export const Span = styled.span`
  font-weight: bold;
  color: #777;
  pointer-events: none;
`;
export const Buttons = styled.div`
  width: 100%;
  margin: 10px auto;
`;
export const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 18px 14px;
  &:hover {
    border: 1px solid #555;
  }
`;

export const formTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#e11",
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        margin: "10px 0",
      },
    },
  },
});
