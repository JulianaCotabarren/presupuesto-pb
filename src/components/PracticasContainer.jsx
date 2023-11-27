import { useContext } from "react";
import { PracticasContext } from "../context/PracticasProvider";
import PracticasRow from "./PracticasRow";
import TitulosTabla from "./TitulosTabla";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 0.5px solid grey;
`;

const StyledPracticas = styled.div`
  height: 60vh;
`;

const PracticasContainer = () => {
  const { practicas } = useContext(PracticasContext);

  return (
    <StyledContainer>
      <TitulosTabla mostrarTodos={false} />
      <StyledPracticas>
        {practicas?.map((practica) => (
          <PracticasRow key={practica.id} {...practica} mostrarTodos={false} />
        ))}
      </StyledPracticas>
    </StyledContainer>
  );
};

export default PracticasContainer;
