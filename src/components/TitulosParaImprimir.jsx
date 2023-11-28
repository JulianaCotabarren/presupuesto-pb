import styled from "styled-components";

const StyledDiv = styled.div`
  /*   width: 52rem; */
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  background-color: #cacaca;
`;

const StyledNro = styled.div`
  width: 3rem;
  font-size: 0.9rem;
  height: 2.5rem;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const TitulosParaImprimir = () => {
  return (
    <StyledDiv>
      <StyledNro>Nro</StyledNro>
      <StyledCodigo>Código</StyledCodigo>
      <StyledPractica>Práctica</StyledPractica>
    </StyledDiv>
  );
};

export default TitulosParaImprimir;
