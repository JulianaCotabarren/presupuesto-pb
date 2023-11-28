import { useContext } from "react";
import { PracticasContext } from "../context/PracticasProvider";
import PracticasRow from "./PracticasRow";
import TitulosTabla from "./TitulosTabla";
import styled from "styled-components";
import SubtotalContainer from "./SubtotalContainer";

const StyledContainer = styled.div`
  border: 0.5px solid grey;
`;

const StyledPracticas = styled.div`
  height: 40vh;
  overflow-y: scroll;
`;

const PracticasSeleccionadasContainer = () => {
  const { practicasSeleccionadas, eliminarPracticaSeleccionada } =
    useContext(PracticasContext);

  return (
    <StyledContainer>
      <TitulosTabla mostrarTodos={true} />
      <StyledPracticas>
        {practicasSeleccionadas?.map((practicaSeleccionada, index) => (
          <PracticasRow
            key={practicaSeleccionada.id}
            nro={index + 1}
            {...practicaSeleccionada}
            onDelete={eliminarPracticaSeleccionada}
            mostrarTodos={true}
          />
        ))}
      </StyledPracticas>
      <SubtotalContainer />
    </StyledContainer>
  );
};

export default PracticasSeleccionadasContainer;
