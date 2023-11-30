import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";

const StyledDiv = styled.div`
  /*   width: 52rem; */
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

const StyledNro = styled.div`
  width: 3rem;
  font-size: 0.9rem;
  border-right: 0.5px solid grey;
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
  border-right: 0.5px solid grey;
  border-left: 0.5px solid grey;
  height: 1.5rem;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  padding-right: 0.5rem;
  text-align: end;
`;

const StyledDelete = styled.div`
  width: 2rem;
  font-size: 1rem;
  cursor: pointer;
  color: #d10000;
`;

const PracticasRow = ({
  id,
  nro,
  nombre,
  ub,
  resultadoCalculo,
  onDelete,
  mostrarTodos = false,
}) => {
  const handleDeleteClick = () => {
    onDelete(id);
  };

  return (
    <>
      <StyledDiv>
        {mostrarTodos && <StyledNro>{nro}</StyledNro>}
        <StyledCodigo>{id}</StyledCodigo>
        <StyledPractica>{nombre}</StyledPractica>
        <StyledUb>{ub}</StyledUb>
        {mostrarTodos && <StyledCalculo>${resultadoCalculo}</StyledCalculo>}
        {mostrarTodos && (
          <StyledDelete onClick={handleDeleteClick}>
            <MdDeleteForever />
          </StyledDelete>
        )}
      </StyledDiv>
    </>
  );
};

export default PracticasRow;
