import styled from "styled-components";
import AgregarContainer from "./AgregarContainer";
import ValorUbContainer from "./ValorUbContainer";

const StyledContainer = styled.div`
  background-color: #ececec;
  padding-top: 0.5rem;
`;

const OperacionesContainer = () => {
  return (
    <StyledContainer>
      <AgregarContainer />
      <ValorUbContainer />
    </StyledContainer>
  );
};

export default OperacionesContainer;
