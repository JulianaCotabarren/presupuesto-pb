import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const StyledNro = styled.div`
  width: 3rem;
  font-size: 0.9rem;
  height: 1.5rem;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledCodigo = styled.ul`
  width: 5rem;
  font-size: 0.9rem;
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
  height: 1.5;
  margin: 0;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PracticasRowParaImprimir = ({ id, nro, nombre }) => {
  return (
    <>
      <StyledDiv>
        <StyledNro>{nro}</StyledNro>
        <StyledCodigo>{id}</StyledCodigo>
        <StyledPractica>{nombre}</StyledPractica>
      </StyledDiv>
    </>
  );
};

export default PracticasRowParaImprimir;
