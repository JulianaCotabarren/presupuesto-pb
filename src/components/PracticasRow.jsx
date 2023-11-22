import styled from "styled-components";

const StyledDiv = styled.div`
  width: 50rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const StyledCodigo = styled.ul`
  width: 5rem;
  font-size: 0.9rem;
  border-right: 0.5px solid grey;
  height: 1.5rem;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledPractica = styled.ul`
  width: 35rem;
  font-size: 0.9rem;
  border-right: 0.5px solid grey;
  height: 1.5;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledUb = styled.ul`
  width: 5rem;
  font-size: 0.9rem;
  border-right: 0.5px solid grey;
  height: 1.5;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledCalculo = styled.ul`
  width: 5rem;
  font-size: 0.9rem;
  height: 1.5rem;
  margin: 0;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const PracticasRow = ({ id, nombre, ub }) => {
  return (
    <StyledDiv>
      <StyledCodigo>{id}</StyledCodigo>
      <StyledPractica>{nombre}</StyledPractica>
      <StyledUb>{ub}</StyledUb>
      <StyledCalculo>$</StyledCalculo>
    </StyledDiv>
  );
};

export default PracticasRow;