import styled from "styled-components";

const StyledDiv = styled.div`
  width: 52rem;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  background-color: #cacaca;
`;

const StyledCodigo = styled.ul`
  width: 5rem;
  font-size: 0.9rem;
  height: 2.5rem;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledPractica = styled.ul`
  width: 35rem;
  font-size: 0.9rem;
  height: 2.5rem;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledUb = styled.ul`
  width: 5rem;
  font-size: 0.9rem;
  height: 2.5rem;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledCalculo = styled.ul`
  width: 7rem;
  font-size: 0.9rem;
  height: 2.5rem;
  margin: 0;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const TitulosTabla = () => {
  return (
    <StyledDiv>
      <StyledCodigo>Código</StyledCodigo>
      <StyledPractica>Práctica</StyledPractica>
      <StyledUb>UBs</StyledUb>
      <StyledCalculo>Cálculo UB</StyledCalculo>
    </StyledDiv>
  );
};

export default TitulosTabla;
