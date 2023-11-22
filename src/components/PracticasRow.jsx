import styled from "styled-components";

const StyledDiv = styled.div`
  width: 50rem;
  border: 0.1rem solid grey;
  display: flex;
  flex-direction: row;
  justify-content: left;
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

const PracticasRow = ({ id, nombre, ub }) => {
  return (
    <StyledDiv>
      <StyledCodigo>{id}</StyledCodigo>
      <StyledPractica>{nombre}</StyledPractica>
      <StyledUb>{ub}</StyledUb>
    </StyledDiv>
  );
};

export default PracticasRow;
