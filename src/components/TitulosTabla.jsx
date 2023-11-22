import styled from "styled-components";

const StyledDiv = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
  font-size: 1rem;
  font-weight: 600;
`;

const StyledCodigo = styled.ul`
  font-size: 0.9rem;
  width: 5rem;
  height: 1rem;
  margin-left: 0.5rem;
  padding-left: 0;
`;

const StyledPractica = styled.ul`
  font-size: 0.9rem;
  width: 40rem;
  height: 1rem;
  margin-left: 0.5rem;
  padding-left: 0;
`;

const StyledUb = styled.ul`
  font-size: 0.9rem;
  width: 5rem;
  height: 1rem;
  margin-left: 0.5rem;
  padding-left: 0;
`;

const TitulosTabla = () => {
  return (
    <StyledDiv>
      <StyledCodigo>Código</StyledCodigo>
      <StyledPractica>Práctica</StyledPractica>
      <StyledUb>UB</StyledUb>
    </StyledDiv>
  );
};

export default TitulosTabla;
